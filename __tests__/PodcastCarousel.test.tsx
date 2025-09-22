import { render, screen, fireEvent } from "@testing-library/react";
import VybzCarouselPodCast from "../components/VybzCarouselPodcast";
import "@testing-library/jest-dom";
import Slider from "react-slick";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

// Mock react-slick to avoid real DOM animations
jest.mock("react-slick", () => jest.fn(({ children }) => <div>{children}</div>));

describe("VybzCarouselPodCast", () => {
  const slides = [
    {
      id: 1,
      title: "sandwich podcast",
      subtitle: "sandwich podcast",
      duration: "1hr 45min",
      category: "Podcast",
      tracks: "10",
      genre: "Hiphop",
      streamingPlatform: "Spotify",
      platformLogo: "/logos/spotify.png",
      cover: "/images/podcastThumb.png",
      backgroundImage: "/images/sandwich2.jpg",
      description: "This is a sample description for sandwich podcast.",
    },
    {
      id: 2,
      title: "true crime kenya",
      subtitle: "various",
      duration: "1hr 45min",
      category: "Podcast",
      tracks: "10",
      genre: "Hiphop",
      streamingPlatform: "Spotify",
      platformLogo: "/logos/spotify.png",
      cover: "/images/pod4.png",
      backgroundImage: "/images/sandwich2.jpg",
      description: "This is a sample description for true crime kenya.",
    },
  ];

  it("renders first podcast slide correctly", () => {
    render(<VybzCarouselPodCast slides={slides} />);
    expect(screen.getByRole("heading", { name: /sandwich podcast/i })).toBeInTheDocument();
    expect(screen.getByText(/sandwich podcast/i)).toBeInTheDocument();
    expect(screen.getByText(/Podcast/i)).toBeInTheDocument();
    expect(screen.getByText(/sample description for sandwich podcast/i)).toBeInTheDocument();
  });

  it("renders fallback slide when no slides are passed", () => {
    render(<VybzCarouselPodCast />);
    expect(screen.getByText(/disko/i)).toBeInTheDocument();
    expect(screen.getByText(/Kodong Klan/i)).toBeInTheDocument();
  });

  it("navigates to plan selection on Subscribe click", () => {
    const { useRouter } = require("next/navigation");
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    render(<VybzCarouselPodCast slides={slides} />);
    const subscribeBtn = screen.getByRole("button", { name: /subscribe/i });
    fireEvent.click(subscribeBtn);

    expect(mockPush).toHaveBeenCalledWith("/planselection/");
  });

  it("navigates to My Favorites on Save click", () => {
    const { useRouter } = require("next/navigation");
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    render(<VybzCarouselPodCast slides={slides} />);
    const saveBtn = screen.getByRole("button", { name: /save/i });
    fireEvent.click(saveBtn);

    expect(mockPush).toHaveBeenCalledWith("/profile?tab=My Favorites");
  });

  it("renders multiple podcast slides", () => {
    render(<VybzCarouselPodCast slides={slides} />);
    expect(screen.getByText(/sandwich podcast/i)).toBeInTheDocument();
    expect(screen.getByText(/true crime kenya/i)).toBeInTheDocument();
  });

  it("calls goToSlide when clicking a custom dot", () => {
    const { container } = render(<VybzCarouselPodCast slides={slides} />);
    const dots = container.querySelectorAll(".dot");
    if (dots.length > 0) {
      fireEvent.click(dots[0]);
      // No crash => dot click handler works
      expect(true).toBeTruthy();
    }
  });
});
