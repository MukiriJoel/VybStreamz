import { render, screen, fireEvent } from "@testing-library/react"
import TabPillComponent from "../components/TabPills"
import { useTheme } from "@/lib/context/ThemeContext"

jest.mock("@/lib/context/ThemeContext", () => ({
  useTheme: jest.fn(),
  getThemeDisplayName: jest.fn(),
}))

const mockTabs = ["Tab 1", "Tab 2"]
const mockOnTabChange = jest.fn()

describe("TabPillComponent", () => {
  it("applies light theme styles", () => {
    ;(useTheme as jest.Mock).mockReturnValue({ theme: "light" })

    render(<TabPillComponent tabs={mockTabs} activeTab="Tab 1" onTabChange={mockOnTabChange} />)

    const tabsContainer = screen.getByRole("tablist")

    // Instead of checking class name, check if background color matches light theme
    const style = window.getComputedStyle(tabsContainer)
    expect(style.backgroundColor).toBe("rgba(255, 255, 255, 0)") // light background
  })

  it("applies dark theme styles", () => {
    ;(useTheme as jest.Mock).mockReturnValue({ theme: "dark" })

    render(<TabPillComponent tabs={mockTabs} activeTab="Tab 1" onTabChange={mockOnTabChange} />)

    const tabsContainer = screen.getByRole("tablist")

    const style = window.getComputedStyle(tabsContainer)
    expect(style.backgroundColor).toBe("rgba(0, 0, 0, 0)") // dark background
  })

  it("calls onTabChange when a tab is clicked", () => {
    ;(useTheme as jest.Mock).mockReturnValue({ theme: "light" })

    render(<TabPillComponent tabs={mockTabs} activeTab="Tab 1" onTabChange={mockOnTabChange} />)

    const secondTab = screen.getByRole("tab", { name: "Tab 2" })
    fireEvent.click(secondTab)

    expect(mockOnTabChange).toHaveBeenCalledTimes(1)
    expect(mockOnTabChange).toHaveBeenCalledWith("Tab 2")
  })
})
