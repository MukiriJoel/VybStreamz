import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ForgotPasswordEmailPage from '../app/verifyForgotEmail/page' // adjust import if needed

// Mock next/navigation
const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

describe('ForgotPasswordEmailPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the heading, description, and email input', () => {
    render(<ForgotPasswordEmailPage />)

    expect(
      screen.getByRole('heading', { name: /forgot password/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/please enter your phone number or email address/i)
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })

  it('updates email input when typing', async () => {
    render(<ForgotPasswordEmailPage />)
    const user = userEvent.setup()

    const input = screen.getByLabelText(/email address/i) as HTMLInputElement
    await user.type(input, 'test@example.com')

    expect(input.value).toBe('test@example.com')
  })

  it('navigates to login page when clicking back button', async () => {
    render(<ForgotPasswordEmailPage />)
    const user = userEvent.setup()

    const backButton = screen.getAllByRole('button')[0] // first button is the back button
    await user.click(backButton)

    expect(mockPush).toHaveBeenCalledWith('/login')
  })

  it('navigates to home when clicking logo', async () => {
    render(<ForgotPasswordEmailPage />)
    const user = userEvent.setup()

    const logo = screen.getByRole('img', { name: '' }) // logo has empty alt
    await user.click(logo)

    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('navigates to verifyForgotNumber when clicking "Use Phone Number Instead"', async () => {
    render(<ForgotPasswordEmailPage />)
    const user = userEvent.setup()

    const switchButton = screen.getByRole('button', { name: /use phone number instead/i })
    await user.click(switchButton)

    expect(mockPush).toHaveBeenCalledWith('/verifyForgotNumber')
  })

  it('navigates to password reset page when clicking Send', async () => {
    render(<ForgotPasswordEmailPage />)
    const user = userEvent.setup()

    const sendButton = screen.getByRole('button', { name: /send/i })
    await user.click(sendButton)

    expect(mockPush).toHaveBeenCalledWith('/passwordReset')
  })
})
