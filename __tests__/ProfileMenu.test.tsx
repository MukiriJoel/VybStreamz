// __tests__/TopProfileMenu.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import TopProfileMenu from "@/components/TopProfileMenu";
import { useTheme } from "@/lib/context/ThemeContext";
import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/lib/context/ThemeContext", () => ({
  useTheme: jest.fn(),
}));

jest.mock("@/lib/context/AuthContext", () => ({
  useAuth: jest.fn(),
}));

describe("TopProfileMenu", () => {
  const mockCloseProfileModal = jest.fn();
  const mockPush = jest.fn();
  const mockSetTheme = jest.fn();
  const mockLogout = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: mockSetTheme,
    });
    (useAuth as jest.Mock).mockReturnValue({
      isLoggedIn: true,
      logout: mockLogout,
    });
    jest.clearAllMocks();
  });

  it("renders the profile menu with correct text when logged in", () => {
    render(<TopProfileMenu closeProfileModal={mockCloseProfileModal} />);
    expect(screen.getByText("My Profile")).toBeInTheDocument();
    expect(screen.getByText("Onunga")).toBeInTheDocument();
  });

  it("navigates to profile page on profile click", () => {
    render(<TopProfileMenu closeProfileModal={mockCloseProfileModal} />);
    const profileRow = screen.getByText("My Profile").closest("div");
    fireEvent.click(profileRow!);
    expect(mockPush).toHaveBeenCalledWith("/profile");
    expect(mockCloseProfileModal).toHaveBeenCalled();
  });

  it("switches theme when tab is clicked", () => {
    render(<TopProfileMenu closeProfileModal={mockCloseProfileModal} />);
    const darkTab = screen.getByText(/dark/i);
    fireEvent.click(darkTab);
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("navigates to My Favorites when clicked", () => {
    render(<TopProfileMenu closeProfileModal={mockCloseProfileModal} />);
    const favoritesRow = screen.getByText(/My Favorites/i);
    fireEvent.click(favoritesRow);
    expect(mockPush).toHaveBeenCalledWith("/profile?tab=My Favorites");
  });

  it("navigates to Subscriptions when clicked", () => {
    render(<TopProfileMenu closeProfileModal={mockCloseProfileModal} />);
    const subscriptionsRow = screen.getByText(/Subscriptions/i);
    fireEvent.click(subscriptionsRow);
    expect(mockPush).toHaveBeenCalledWith("/profile?tab=Subscriptions");
  });

  it("calls logout and navigates home when logout is clicked", async () => {
    render(<TopProfileMenu closeProfileModal={mockCloseProfileModal} />);
    const logoutRow = screen.getByText(/Logout/i);
    fireEvent.click(logoutRow);
    expect(mockLogout).toHaveBeenCalled();
    expect(mockPush).toHaveBeenCalledWith("/");
  });

  it("closes modal when clicking outside", () => {
    render(<TopProfileMenu closeProfileModal={mockCloseProfileModal} />);
    const backdrop = screen.getByTestId("top-profile-backdrop");
    fireEvent.click(backdrop);
    expect(mockCloseProfileModal).toHaveBeenCalled();
  });

  it("does not close modal when clicking inside", () => {
    render(<TopProfileMenu closeProfileModal={mockCloseProfileModal} />);
    const modalContent = screen.getByTestId("top-profile-content");
    fireEvent.click(modalContent);
    expect(mockCloseProfileModal).not.toHaveBeenCalled();
  });
});
