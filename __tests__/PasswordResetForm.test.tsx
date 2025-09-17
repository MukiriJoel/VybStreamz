import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PasswordResetForm from '../app/passwordReset/page' // adjust path if needed

// Mock router
const mockPush = jest.fn()
const mockBack = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    back: mockBack,
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

describe('PasswordResetForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the title and instructions', () => {
    render(<PasswordResetForm />)
    expect(screen.getByText(/reset password/i)).toBeInTheDocument()
    expect(
      screen.getByText(/your new password must be different from your previous passwords/i)
    ).toBeInTheDocument()
  })

  it('renders password input fields', () => {
    render(<PasswordResetForm />)
    expect(screen.getByLabelText(/new password/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('displays password validation indicators and updates them as user types', async () => {
    render(<PasswordResetForm />)
    const user = userEvent.setup()

    const newPasswordInput = screen.getByLabelText(/new password/i)

    // Initially, indicators should NOT be filled
    const minLengthIndicator = screen.getByText(/at least 8 characters/i).previousSibling
    expect(minLengthIndicator).toHaveClass('bg-gray-300')

    await user.type(newPasswordInput, 'Passw1!')
    // Still less than 8 characters, should NOT pass min length
    expect(minLengthIndicator).toHaveClass('bg-gray-300')

    await user.type(newPasswordInput, 'X') // Now it's >= 8 chars
    expect(minLengthIndicator).toHaveClass('bg-[#009951]')
  })

  it('navigates back when back button is clicked', async () => {
    render(<PasswordResetForm />)
    const user = userEvent.setup()

    const backButton = screen.getByRole('button', { hidden: true }) // back button has no text label
    await user.click(backButton)

    expect(mockBack).toHaveBeenCalledTimes(1)
  })

  it('navigates home when clicking logo', async () => {
    render(<PasswordResetForm />)
    const user = userEvent.setup()

    const logo = screen.getByRole('img', { hidden: true })
    await user.click(logo)

    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('calls login and navigates to /home when submitting form with valid passwords', async () => {
    render(<PasswordResetForm />)
    const user = userEvent.setup()

    const newPasswordInput = screen.getByLabelText(/new password/i)
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
    const submitButton = screen.getByRole('button', { name: /update password/i })

    // Enter valid password
    await user.type(newPasswordInput, 'ValidPass1!')
    await user.type(confirmPasswordInput, 'ValidPass1!')
    await user.click(submitButton)

    expect(mockLogin).toHaveBeenCalled()
    expect(mockPush).toHaveBeenCalledWith('/home')
  })
})
