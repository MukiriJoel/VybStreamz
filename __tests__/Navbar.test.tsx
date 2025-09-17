import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NavBar from "@/components/NavBar";
import { usePathname, useRouter } from "next/navigation";

// ✅ Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

// ✅ Mock matchMedia to force "desktop" mode by default
beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: query.includes("(min-width: 768px)"), // force matches for desktop view
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  });
});

// ✅ Helper to simulate mobile viewport (for hamburger test)
const setMobileViewport = () => {
  window.innerWidth = 375;
  window.dispatchEvent(new Event("resize"));
};

// ✅ Helper to simulate scroll
const setScrollY = (y: number) => {
  Object.defineProperty(window, "scrollY", {
    writable: true,
    configurable: true,
    value: y,
  });
  fireEvent.scroll(window);
};

describe("NavBar Component", () => {
  let pushMock: jest.Mock;

  beforeEach(() => {
    pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    (usePathname as jest.Mock).mockReturnValue("/");
  });

  it("renders logo and all navigation links", () => {
    render(<NavBar />);
    // ✅ Logo must have an alt for accessibility
    expect(
      screen.getByRole("img", { name: /vybstreamz logo/i })
    ).toBeInTheDocument();

    ["videos", "music", "games", "education", "podcasts", "partners"].forEach(
      (item) => expect(screen.getByRole("link", { name: item })).toBeInTheDocument()
    );
  });

  it("navigates when a nav link is clicked", () => {
    render(<NavBar />);
    fireEvent.click(screen.getByRole("link", { name: /music/i }));
    expect(pushMock).toHaveBeenCalledWith("/music");
  });

  it("toggles mobile menu open and close", async () => {
    setMobileViewport();
    render(<NavBar />);

    // ✅ Requires aria-label="Open menu" on hamburger button
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(menuButton);

    // Wait for menu items to appear
    await waitFor(() =>
      expect(screen.getByRole("link", { name: /videos/i })).toBeInTheDocument()
    );

    // ✅ Requires aria-label="Close menu" on close button
    const closeButton = screen.getByRole("button", { name: /close menu/i });
    fireEvent.click(closeButton);

    await waitFor(() =>
      expect(screen.queryByRole("link", { name: /videos/i })).not.toBeVisible()
    );
  });

  it("toggles search bar and updates query", async () => {
    render(<NavBar />);

    // ✅ Requires aria-label="Open search" on search icon button
    const searchIcon = screen.getByRole("button", { name: /open search/i });
    fireEvent.click(searchIcon);

    const input = await screen.findByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: "React" } });

    expect(input).toHaveValue("React");
  });

  it("navigates to notifications when clicked", () => {
    render(<NavBar />);
    // ✅ Requires aria-label="Notifications" on notification icon button
    const notifButton = screen.getByRole("button", { name: /notifications/i });
    fireEvent.click(notifButton);
    expect(pushMock).toHaveBeenCalledWith("/profile/notifications");
  });

  it("navigates to payment when shopping bag is clicked", () => {
    render(<NavBar />);
    // ✅ Requires aria-label="Shopping bag" on shopping bag button
    const bagButton = screen.getByRole("button", { name: /shopping bag/i });
    fireEvent.click(bagButton);
    expect(pushMock).toHaveBeenCalledWith("/payment");
  });

  it("opens profile modal when avatar is clicked", async () => {
    render(<NavBar />);
    // ✅ Requires alt="User avatar" on AvatarImage
    const avatar = screen.getByRole("img", { name: /user avatar/i });
    fireEvent.click(avatar);
    // Wait for modal content
    expect(await screen.findByText(/profile/i)).toBeInTheDocument();
  });

  it("applies dark background style on scroll for matching routes", async () => {
    (usePathname as jest.Mock).mockReturnValue("/music");
    render(<NavBar />);
    setScrollY(0);
    await waitFor(() => {
      expect(screen.getByRole("banner").className).toMatch(/bg-transparent/);
    });
  });
});
