import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import VybzCarouselEducation from "@/components/VybzCarouselEducation";
import "@testing-library/jest-dom";
import Slider from "react-slick";

// Mock next/navigation's useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

// Mock react-slick to avoid real DOM animations
jest.mock("react-slick", () => jest.fn(({ children }) => <div>{children}</div>));

describe("VybzCarouselEducation", () => {
  const slides = [
    {
      id: 1,
      title: "rich dad poor dad",
      subtitle: "robert kiyosaki",
      duration: "1hr 45min",
      category: "Book",
      tracks: "10",
      genre: "1 issue",
      streamingPlatform: "Spotify",
      platformLogo: "/logos/showmax.png",
      cover: "/images/robertSm.png",
      backgroundImage: "/images/robert.png",
    },
    {
      id: 2,
      title: "cashflow quadrant",
      subtitle: "robert kiyosaki",
      duration: "2hr 00min",
      category: "Book",
      tracks: "12",
      genre: "1 issue",
      streamingPlatform: "Spotify",
      platformLogo: "/logos/showmax.png",
      cover: "/images/robertSm.png",
      backgroundImage: "/images/robert.png",
    },
  ];

  it("renders first slide data correctly", () => {
    render(<VybzCarouselEducation slides={slides} />);

    expect(
      screen.getByRole("heading", { name: /rich dad poor dad/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/robert kiyosaki/i)).toBeInTheDocument();
    expect(screen.getByText(/Book/i)).toBeInTheDocument();
  });

  it("renders fallback slide when no slides are provided", () => {
    render(<VybzCarouselEducation />);
    expect(screen.getByText(/rich dad poor dad/i)).toBeInTheDocument();
  });

  it("calls router.push when Subscribe is clicked", () => {
    const { useRouter } = require("next/navigation");
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    render(<VybzCarouselEducation slides={slides} />);
    const subscribeButton = screen.getByRole("button", { name: /subscribe/i });
    fireEvent.click(subscribeButton);

    expect(mockPush).toHaveBeenCalledWith("/planselection/");
  });

  it("calls router.push when Save is clicked", () => {
    const { useRouter } = require("next/navigation");
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    render(<VybzCarouselEducation slides={slides} />);
    const saveButton = screen.getByRole("button", { name: /save/i });
    fireEvent.click(saveButton);

    expect(mockPush).toHaveBeenCalledWith("/profile?tab=My Favorites");
  });

  it("renders multiple slides", () => {
    render(<VybzCarouselEducation slides={slides} />);
    expect(screen.getByText(/rich dad poor dad/i)).toBeInTheDocument();
    expect(screen.getByText(/cashflow quadrant/i)).toBeInTheDocument();
  });
});
