import { render, screen, fireEvent } from "@testing-library/react"
import NavBar from "@/components/NavBar"
import { useRouter, usePathname } from "next/navigation"

// Mock Next.js navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}))

describe("Mobile Sidebar", () => {
  let mockPush: jest.Mock

  beforeEach(() => {
    // Force small viewport (mobile)
    Object.defineProperty(window, "innerWidth", { writable: true, value: 375 })
    Object.defineProperty(window, "innerHeight", { writable: true, value: 667 })
    window.scrollY = 0
    window.dispatchEvent(new Event("resize"))

    mockPush = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(usePathname as jest.Mock).mockReturnValue("/videos")
  })

  it("renders closed sidebar by default", () => {
    render(<NavBar />)
    const sidebar = screen.getByRole("complementary", { hidden: true })
    expect(sidebar).toHaveClass("-translate-x-full")
  })

  it("opens sidebar when menu button is clicked", () => {
    render(<NavBar />)
    const menuButton = screen.getByRole("button", { name: /open menu/i })
    fireEvent.click(menuButton)

    const sidebar = screen.getByRole("complementary", { hidden: true })
    expect(sidebar).toHaveClass("translate-x-0")
  })

  it("closes sidebar when X button is clicked", () => {
    render(<NavBar />)

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }))
    const closeButton = screen.getByRole("button", { name: /close menu/i })
    fireEvent.click(closeButton)

    const sidebar = screen.getByRole("complementary", { hidden: true })
    expect(sidebar).toHaveClass("-translate-x-full")
  })

  it("navigates and closes when a nav link is clicked", () => {
    render(<NavBar />)
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }))

    const link = screen.getByRole("link", { name: /music/i })
    fireEvent.click(link)

    expect(mockPush).not.toHaveBeenCalled() // <Link> handles navigation itself
    const sidebar = screen.getByRole("complementary", { hidden: true })
    expect(sidebar).toHaveClass("-translate-x-full")
  })

  it("highlights active link when pathname matches", () => {
    render(<NavBar />)
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }))

    const activeLink = screen.getByRole("link", { name: /videos/i })
    expect(activeLink).toHaveClass("text-[#C62676]")
  })
})
