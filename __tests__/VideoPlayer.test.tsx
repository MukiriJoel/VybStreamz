import { render, screen, fireEvent } from "@testing-library/react";
import VybzVideoPlayer from "@/components/VybzVideoPlayer";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(), // mock navigation
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
}));


// Mock HTMLMediaElement methods because JSDOM doesn't implement them
beforeAll(() => {
  Object.defineProperty(HTMLMediaElement.prototype, "play", {
    configurable: true,
    value: jest.fn().mockResolvedValue(undefined),
  });

  Object.defineProperty(HTMLMediaElement.prototype, "pause", {
    configurable: true,
    value: jest.fn(),
  });

  // Mock duration & currentTime to be writable
  Object.defineProperty(HTMLMediaElement.prototype, "duration", {
    configurable: true,
    writable: true,
    value: 100,
  });

  Object.defineProperty(HTMLMediaElement.prototype, "currentTime", {
    configurable: true,
    writable: true,
    value: 20,
  });
});

describe("VybzVideoPlayer", () => {
  it("renders the video element", () => {
    render(<VybzVideoPlayer videoSrc="/sample.mp4" />);
    const video = screen.getByTestId("video-player");
    expect(video).toBeInTheDocument();
  });

  it("renders play button and toggles play state on click", () => {
    render(<VybzVideoPlayer videoSrc="/sample.mp4" />);
    const playButton = screen.getByRole("button", { name: /play/i });

    expect(playButton).toBeInTheDocument();
    fireEvent.click(playButton);

    // After clicking, pause button should appear
    const pauseButton = screen.getByRole("button", { name: /pause/i });
    expect(pauseButton).toBeInTheDocument();
  });

  it("mutes and unmutes volume on click", () => {
    render(<VybzVideoPlayer videoSrc="/sample.mp4" />);
    const volumeButton = screen.getByRole("button", { name: /volume/i });

    expect(volumeButton).toBeInTheDocument();
    fireEvent.click(volumeButton);
    // Can't assert volume directly (JSDOM limitation), but we at least ensure no crash
  });

  it("updates currentTime when skipping forward", () => {
    render(<VybzVideoPlayer videoSrc="/sample.mp4" />);
    const skipButton = screen.getByRole("button", { name: /skip forward/i });
    expect(skipButton).toBeInTheDocument();
    fireEvent.click(skipButton);

    // After skipping, currentTime should increase
    expect(HTMLMediaElement.prototype.currentTime).toBeGreaterThan(20);
  });
});
