import { render, screen, fireEvent } from "@testing-library/react";
import VybzCarouselMusic from "@/components/VybzCarouselMusic";
import "@testing-library/jest-dom";
import Slider from "react-slick";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

// Mock react-slick to simplify tests
jest.mock("react-slick", () => jest.fn(({ children }) => <div>{children}</div>));

describe("VybzCarouselMusic", () => {
  const slides = [
    {
      id: 1,
      title: "disko",
      subtitle: "Kodong Klan",
      duration: "1hr 45min",
      category: "Album",
      tracks: "10",
      genre: "Hiphop",
      streamingPlatform: "Spotify",
      platformLogo: "/logos/spotify.png",
      cover: "/images/albumCover.png",
      backgroundImage: "/images/albumCover.png",
    },
    {
      id: 2,
      title: "super morio",
      subtitle: "matata",
      duration: "1hr 45min",
      category: "Album",
      tracks: "10",
      genre: "Hiphop",
      streamingPlatform: "Spotify",
      platformLogo: "/logos/spotify.png",
      cover: "/images/albumCover.png",
      backgroundImage: "/images/matata.png",
    },
  ];

  it("renders first slide data correctly", () => {
    render(<VybzCarouselMusic slides={slides} />);
    expect(screen.getByRole("heading", { name: /disko/i })).toBeInTheDocument();
    expect(screen.getByText(/Kodong Klan/i)).toBeInTheDocument();
    expect(screen.getByText(/Album/i)).toBeInTheDocument();
  });

  it("renders fallback slide when no slides are passed", () => {
    render(<VybzCarouselMusic />);
    expect(screen.getByText(/disko/i)).toBeInTheDocument();
  });

  it("navigates to plan selection when Subscribe is clicked", () => {
    const { useRouter } = require("next/navigation");
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    render(<VybzCarouselMusic slides={slides} />);
    const subscribeButton = screen.getByRole("button", { name: /subscribe/i });
    fireEvent.click(subscribeButton);

    expect(mockPush).toHaveBeenCalledWith("/planselection/");
  });

  it("navigates to favorites when Save is clicked", () => {
    const { useRouter } = require("next/navigation");
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    render(<VybzCarouselMusic slides={slides} />);
    const saveButton = screen.getByRole("button", { name: /save/i });
    fireEvent.click(saveButton);

    expect(mockPush).toHaveBeenCalledWith("/profile?tab=My Favorites");
  });

  it("renders multiple slides correctly", () => {
    render(<VybzCarouselMusic slides={slides} />);
    expect(screen.getByText(/disko/i)).toBeInTheDocument();
    expect(screen.getByText(/super morio/i)).toBeInTheDocument();
  });
});
