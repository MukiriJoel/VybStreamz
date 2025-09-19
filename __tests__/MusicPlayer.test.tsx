import { render, screen, fireEvent, act } from "@testing-library/react";
import VybzMusicPlayer from "@/components/VybzMusicPlayer"; // adjust path if needed
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("VybzMusicPlayer", () => {
  let pushMock: jest.Mock;

  beforeEach(() => {
    pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    jest.useFakeTimers(); // simulate setTimeout logic for hiding controls
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  const defaultProps = {
    audioSrc: "/test-audio.mp3",
    bannerImage: "/test-banner.jpg",
    albumImage: "/test-album.jpg",
    title: "Test Title",
    subtitle: "Test Subtitle",
    albumInfo: "Test Info",
    platformLogo: "/test-platform.png",
  };

  it("renders correctly with props", () => {
    render(<VybzMusicPlayer {...defaultProps} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /album\/podcast banner/i })).toBeInTheDocument();
  });

  it("toggles play/pause when main button is clicked", () => {
    render(<VybzMusicPlayer {...defaultProps} />);
    const mainButton = screen.getAllByRole("button").find((btn) =>
      btn.className.includes("absolute")
    );

    const audio = screen.getByRole("audio");
    jest.spyOn(audio, "play").mockImplementation(() => Promise.resolve());
    jest.spyOn(audio, "pause").mockImplementation(() => {});

    // Play
    act(() => {
      fireEvent.click(mainButton!);
    });
    expect(audio.play).toHaveBeenCalled();

    // Pause
    act(() => {
      fireEvent.click(mainButton!);
    });
    expect(audio.pause).toHaveBeenCalled();
  });

  it("mutes and unmutes when volume button is clicked", () => {
    render(<VybzMusicPlayer {...defaultProps} />);
    const volumeButton = screen.getAllByRole("button").find((btn) =>
      btn.className.includes("bg-[#2C2C2C]")
    );

    expect(volumeButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(volumeButton!);
    });

    // Muted state should be applied (UI would re-render with VolumeX icon)
    // Instead of checking DOM icon swap (fragile), we check internal state via aria/role
    expect(volumeButton).toHaveAttribute("aria-pressed", "true");
  });

  it("calls router.push on Subscribe and Save button clicks", () => {
    render(<VybzMusicPlayer {...defaultProps} />);
    const subscribeButton = screen.getByRole("button", { name: /subscribe/i });
    const saveButton = screen.getByRole("button", { name: /save/i });

    fireEvent.click(subscribeButton);
    expect(pushMock).toHaveBeenCalledWith("/planselection/");

    fireEvent.click(saveButton);
    expect(pushMock).toHaveBeenCalledWith("/profile?tab=My Favorites");
  });

  it("skips forward 10 seconds when skip button is clicked", () => {
    render(<VybzMusicPlayer {...defaultProps} />);
    const skipButton = screen.getAllByRole("button").find((btn) =>
      btn.className.includes("SkipForward")
    );

    const audio = screen.getByRole("audio");
    audio.currentTime = 5;
    audio.duration = 30;

    fireEvent.click(skipButton!);
    expect(audio.currentTime).toBeGreaterThan(5);
  });

  it("shows and hides controls based on hover state and timers", () => {
    render(<VybzMusicPlayer {...defaultProps} />);
    const container = screen.getByRole("presentation", { hidden: true }) || screen.getByTestId("music-player-container");

    fireEvent.mouseEnter(container);
    jest.advanceTimersByTime(1000);
    expect(container).toHaveClass("cursor-pointer");

    jest.advanceTimersByTime(4000);
    // controls should be hidden (opacity-0 applied)
    expect(container.querySelector(".seek-bar")?.parentElement).toHaveClass("opacity-0");
  });
});
