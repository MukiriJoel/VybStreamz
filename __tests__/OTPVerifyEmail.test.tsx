import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import VerifyEmail from '../app/otp/page' // adjust path if needed

// Mocks
const mockPush = jest.fn()
const mockBack = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    back: mockBack,
  }),
}))

// Mock OtpInput component (to isolate VerifyEmail behavior)
jest.mock('@/components/OtpInput', () => () => <div data-testid="otp-input">[Mocked OTP Input]</div>)

describe('VerifyEmail Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders title and description text', () => {
    render(<VerifyEmail />)

    expect(screen.getByText(/verify phone number/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter the verification code sent to your number/i)).toBeInTheDocument()
  })

  it('renders mocked OtpInput component', () => {
    render(<VerifyEmail />)
    expect(screen.getByTestId('otp-input')).toBeInTheDocument()
  })

  it('navigates back when clicking back button', async () => {
    render(<VerifyEmail />)
    const user = userEvent.setup()

    const backButton = screen.getByRole('button', { hidden: true }) // back button has no accessible name
    await user.click(backButton)

    expect(mockBack).toHaveBeenCalledTimes(1)
  })

  it('navigates home when clicking logo', async () => {
    render(<VerifyEmail />)
    const user = userEvent.setup()

    const logo = screen.getByRole('img', { hidden: true })
    await user.click(logo)

    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('navigates to preference page when clicking Verify button', async () => {
    render(<VerifyEmail />)
    const user = userEvent.setup()

    const verifyButton = screen.getByRole('button', { name: /verify/i })
    await user.click(verifyButton)

    expect(mockPush).toHaveBeenCalledWith('/preference')
  })

  it('renders Resend Code button and additional text', () => {
    render(<VerifyEmail />)

    expect(screen.getByRole('button', { name: /resend code/i })).toBeInTheDocument()
    expect(screen.getByText(/or verify via phone number/i)).toBeInTheDocument()
  })
})
