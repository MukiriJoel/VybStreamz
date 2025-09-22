import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import VybzCarouselMain from "../components/VybzCarouselMain"; // Adjust import path
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";

// ✅ Mock next/router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// ✅ Mock react-slick slider (to avoid needing slick-carousel DOM)
jest.mock("react-slick", () => {
  return jest.fn(({ children }) => <div data-testid="mock-slider">{children}</div>);
});

describe("VybzCarouselMain", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
  });

  const mockSlides = [
    {
      id: 1,
      title: "Squid Game 3",
      description: "Thrilling drama series",
      category: "Game",
      ageRating: "16 Yrs +",
      streamingPlatform: "Netflix",
      platformLogo: "/logos/netflix.png",
      backgroundImage: "/images/netflixGames.png",
    },
    {
      id: 2,
      title: "Mofaya",
      description: "Kenyan action drama",
      category: "Movie",
      ageRating: "16 Yrs +",
      streamingPlatform: "Baze",
      platformLogo: "/logos/bazeLg.png",
      backgroundImage: "/images/mofaya.png",
    },
  ];

  it("renders the first slide title and description", () => {
    render(<VybzCarouselMain slides={mockSlides} />);
    expect(screen.getByText("Squid Game 3")).toBeInTheDocument();
    expect(screen.getByText(/thrilling drama series/i)).toBeInTheDocument();
  });

  it("renders multiple slides", () => {
    render(<VybzCarouselMain slides={mockSlides} />);
    expect(screen.getByText("Mofaya")).toBeInTheDocument();
  });

  it("calls router.push when Subscribe is clicked", () => {
    render(<VybzCarouselMain slides={mockSlides} />);
    const subscribeBtn = screen.getByRole("button", { name: /subscribe/i });
    fireEvent.click(subscribeBtn);
    expect(mockPush).toHaveBeenCalledWith("/planselection/");
  });

  it("calls router.push when Save is clicked", () => {
    render(<VybzCarouselMain slides={mockSlides} />);
    const saveBtn = screen.getByRole("button", { name: /save/i });
    fireEvent.click(saveBtn);
    expect(mockPush).toHaveBeenCalledWith("/profile?tab=My Favorites");
  });

  it("should display slide titles in order", async () => {
    render(<VybzCarouselMain slides={mockSlides} />);
    // Since react-slick is mocked, both slides are rendered at once
    const titles = screen.getAllByRole("heading", { level: 1 });
    expect(titles[0]).toHaveTextContent("Squid Game 3");
    expect(titles[1]).toHaveTextContent("Mofaya");
  });
});
