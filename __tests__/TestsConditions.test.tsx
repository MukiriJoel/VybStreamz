import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TermsConditionsPage from '../app/termsconditions/page' // adjust path if needed

// Mock next/router
const mockPush = jest.fn()
const mockBack = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    back: mockBack,
  }),
}))

// Mock AuthContext (even though we don’t use login here, we need to mock it to avoid errors)
jest.mock('@/lib/context/AuthContext', () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}))

describe('TermsConditionsPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the main title and key sections', () => {
    render(<TermsConditionsPage />)

    // Check title
    expect(
      screen.getByRole('heading', { name: /terms and conditions/i })
    ).toBeInTheDocument()

    // Check at least some sections are rendered
    expect(
      screen.getByRole('heading', { name: /conditions of use/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /privacy policy/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /age restriction/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /intellectual property/i })
    ).toBeInTheDocument()
  })

  it('navigates to home when clicking the logo', async () => {
    render(<TermsConditionsPage />)
    const user = userEvent.setup()

    const logo = screen.getByRole('img', { name: '' }) // no alt text given, so we match by role
    await user.click(logo)

    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('calls router.back() when clicking the back button', async () => {
    render(<TermsConditionsPage />)
    const user = userEvent.setup()

    // Find the back button by role (it's a <button>)
    const backButton = screen.getAllByRole('button')[0] // first button is the back one
    await user.click(backButton)

    expect(mockBack).toHaveBeenCalled()
  })

  it('navigates to /createAccount when clicking Cancel', async () => {
    render(<TermsConditionsPage />)
    const user = userEvent.setup()

    const cancelButton = screen.getByRole('button', { name: /cancel/i })
    await user.click(cancelButton)

    expect(mockPush).toHaveBeenCalledWith('/createAccount')
  })

  it('navigates to /createAccount when clicking Done', async () => {
    render(<TermsConditionsPage />)
    const user = userEvent.setup()

    const doneButton = screen.getByRole('button', { name: /done/i })
    await user.click(doneButton)

    expect(mockPush).toHaveBeenCalledWith('/createAccount')
  })
})
