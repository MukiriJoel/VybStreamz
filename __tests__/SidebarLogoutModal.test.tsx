import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import Sidebar from "@/app/parts/sidebar"
import { useAuth } from "@/lib/context/AuthContext"

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/profile"), // ✅ Mock pathname to a fixed route
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}))

jest.mock("@/lib/context/AuthContext", () => ({
  useAuth: jest.fn(),
}))

describe("Sidebar Logout Modal", () => {
  const mockLogout = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useAuth as jest.Mock).mockReturnValue({
      isLoggedIn: true,
      logout: mockLogout,
    })
  })

  it("opens the logout modal when clicking Logout", async () => {
    render(<Sidebar />)

    const logoutLink = screen.getAllByText("Logout")[0]
    fireEvent.click(logoutLink)

    expect(await screen.findByText(/You are about to log out/i)).toBeInTheDocument()
  })

  it("closes the modal when clicking 'No, Go back'", async () => {
    render(<Sidebar />)

    const logoutLink = screen.getAllByText("Logout")[0]
    fireEvent.click(logoutLink)

    const cancelButton = await screen.findByRole("button", { name: /no, go back/i })
    fireEvent.click(cancelButton)

    await waitFor(() =>
      expect(screen.queryByText(/You are about to log out/i)).not.toBeInTheDocument()
    )
  })

  it("calls logout and redirects to home when confirming logout", async () => {
    const mockPush = jest.fn()
    ;(require("next/navigation").useRouter as jest.Mock).mockReturnValue({ push: mockPush })

    render(<Sidebar />)

    const logoutLink = screen.getAllByText("Logout")[0]
    fireEvent.click(logoutLink)

    const confirmButton = await screen.findByRole("button", { name: /log out/i })
    fireEvent.click(confirmButton)

    expect(mockLogout).toHaveBeenCalled()
    expect(mockPush).toHaveBeenCalledWith("/")
  })
})
