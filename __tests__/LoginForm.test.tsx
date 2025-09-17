import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from '../app/login/page'

// Mock next/navigation
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

describe('LoginForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the login form title', () => {
    render(<LoginForm />)
    expect(screen.getByText(/welcome back/i)).toBeInTheDocument()
  })

  it('renders phone number input with default value', () => {
    render(<LoginForm />)
    expect(screen.getByDisplayValue('720 123 456')).toBeInTheDocument()
  })

  it('toggles password visibility when clicking eye icon', async () => {
    render(<LoginForm />)
    const user = userEvent.setup()
    const passwordInput = screen.getByPlaceholderText(/enter your password/i)
    const toggleButton = screen.getByRole('button', { name: '' }) // eye button has no label

    // Initially password type should be "password"
    expect(passwordInput).toHaveAttribute('type', 'password')

    await user.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'text')

    await user.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('navigates to Forgot Password page when clicking Forgot Password button', async () => {
    render(<LoginForm />)
    const user = userEvent.setup()
    const forgotButton = screen.getByRole('button', { name: /forgot password/i })

    await user.click(forgotButton)
    expect(mockPush).toHaveBeenCalledWith('/verifyForgotEmail')
  })

  it('calls login() and redirects to home when clicking Log In', async () => {
    render(<LoginForm />)
    const user = userEvent.setup()
    const loginButton = screen.getByRole('button', { name: /log in/i })

    await user.click(loginButton)
    expect(mockLogin).toHaveBeenCalledTimes(1)
    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('navigates to create account page when clicking Sign-Up link', async () => {
    render(<LoginForm />)
    const user = userEvent.setup()
    const signUpButton = screen.getByRole('button', { name: /sign-up/i })

    await user.click(signUpButton)
    expect(mockPush).toHaveBeenCalledWith('/createAccount')
  })

  it('navigates home when clicking the logo', async () => {
    render(<LoginForm />)
    const user = userEvent.setup()
    const logo = screen.getByRole('img', { hidden: true }) // logo has empty alt

    await user.click(logo)
    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('calls router.back() when clicking back button', async () => {
    render(<LoginForm />)
    const user = userEvent.setup()
    const backButton = screen.getByRole('button', { hidden: true }) // back button has no label

    await user.click(backButton)
    expect(mockBack).toHaveBeenCalled()
  })
})
