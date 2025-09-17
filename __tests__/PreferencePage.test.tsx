import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PreferencePage from '../app/preference/page' // adjust import path as needed

// Mock router
const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

// Mock AuthContext
const mockLogin = jest.fn()
jest.mock('@/lib/context/AuthContext', () => ({
  useAuth: () => ({
    isLoggedIn: false,
    login: mockLogin,
  }),
}))

describe('PreferencePage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the title and subtitle', () => {
    render(<PreferencePage />)
    expect(
      screen.getByText(/help us understand your preference/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/explore, compare, vibe – without switching apps/i)
    ).toBeInTheDocument()
  })

  it('renders multiple genre buttons', () => {
    render(<PreferencePage />)
    // Expect at least a few well-known genres to appear
    expect(screen.getByRole('button', { name: /Drama/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Comedy/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Sci-Fi/i })).toBeInTheDocument()
  })

  it('toggles genre selection when clicked', async () => {
    render(<PreferencePage />)
    const user = userEvent.setup()

    const dramaButton = screen.getByRole('button', { name: /Drama/i })

    // Initially unselected (light background)
    expect(dramaButton).toHaveClass('bg-[#E5E5E5]')

    await user.click(dramaButton)
    // Should now be selected (pink background)
    expect(dramaButton).toHaveClass('bg-[#c62676]')

    await user.click(dramaButton)
    // Should revert back to unselected
    expect(dramaButton).toHaveClass('bg-[#E5E5E5]')
  })

  it('calls login() and navigates home when clicking "I am ready to explore"', async () => {
    render(<PreferencePage />)
    const user = userEvent.setup()

    const exploreButton = screen.getByRole('button', { name: /i am ready to explore/i })
    await user.click(exploreButton)

    expect(mockLogin).toHaveBeenCalled()
    expect(mockPush).toHaveBeenCalledWith('/')
  })
})
