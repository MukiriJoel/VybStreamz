import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreateAccountPage from '../app/createAccount/page'


// Mock next/router to avoid actual navigation during tests
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
}))

// Mock useAuth context
jest.mock('../lib/context/AuthContext', () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}))

describe('CreateAccountPage component', () => {
  it('renders the title and subtitle correctly', () => {
    render(<CreateAccountPage />)
    expect(screen.getByRole('heading', { name: /create account/i })).toBeInTheDocument()
    expect(
      screen.getByText(/create your account and dive into non-stop entertainment/i)
    ).toBeInTheDocument()
  })

  it('renders input fields for phone number, email, and password', () => {
    render(<CreateAccountPage />)
    expect(screen.getByPlaceholderText(/720 123 456/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('updates password and shows validation indicators', async () => {
    const user = userEvent.setup()
    render(<CreateAccountPage />)

    const passwordInput = screen.getByLabelText(/password/i)

    await user.type(passwordInput, 'Pass1!')
    expect(passwordInput).toHaveValue('Pass1!')
    // One of the validations should be marked as passed (capital letter, number, special char)
    expect(screen.getByText(/at least 1 capital letter/i).previousSibling).toHaveClass(
      'bg-[#009951]'
    )
    expect(screen.getByText(/at least 1 number/i).previousSibling).toHaveClass(
      'bg-[#009951]'
    )
  })

  it('renders Create Account button', () => {
    render(<CreateAccountPage />)
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument()
  })

  it('shows confirmation modal when Create Account is clicked', async () => {
    const user = userEvent.setup()
    render(<CreateAccountPage />)
    const createButton = screen.getByRole('button', { name: /create account/i })

    await user.click(createButton)
    expect(screen.getByText(/confirm your details/i)).toBeInTheDocument()
  })

  it('closes modal when cancel button is clicked', async () => {
    const user = userEvent.setup()
    render(<CreateAccountPage />)

    const createButton = screen.getByRole('button', { name: /create account/i })
    await user.click(createButton)

    const cancelButton = screen.getByRole('button', { name: /cancel/i })
    await user.click(cancelButton)

    expect(screen.queryByText(/confirm your details/i)).not.toBeInTheDocument()
  })

  it('navigates to login page when Sign-in link is clicked', async () => {
    const user = userEvent.setup()
    const mockPush = jest.fn()
    jest.spyOn(require('next/navigation'), 'useRouter').mockReturnValue({ push: mockPush, back: jest.fn() })

    render(<CreateAccountPage />)
    const signInLink = screen.getByText(/sign-in/i)

    await user.click(signInLink)
    expect(mockPush).toHaveBeenCalledWith('/login')
  })
})
