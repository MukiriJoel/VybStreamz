import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SectionHeader from '../components/SectionHeader'

// Mock next/router to intercept push
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('SectionHeader component', () => {
  it('renders section title correctly', () => {
    render(<SectionHeader title="test section" route="/test" viewButton={true} />)
    expect(screen.getByText('test section')).toBeInTheDocument()
  })

  it('renders title with proper capitalization class', () => {
    render(<SectionHeader title="my videos" route="/test" viewButton={true} />)
    const titleElement = screen.getByText('my videos')
    expect(titleElement).toHaveClass('capitalize')
    expect(titleElement.tagName).toBe('H3')
  })

  it('renders View More button when viewButton is true', () => {
    render(<SectionHeader title="test" route="/test" viewButton={true} />)
    expect(screen.getByRole('button', { name: /view more/i })).toBeInTheDocument()
  })

  it('does NOT render View More button when viewButton is false', () => {
    render(<SectionHeader title="test" route="/test" viewButton={false} />)
    expect(screen.queryByRole('button', { name: /view more/i })).not.toBeInTheDocument()
  })

  it('calls router.push when View More button is clicked', async () => {
    const user = userEvent.setup()
    const mockPush = jest.fn()

    // Override useRouter mock to spy on push
    jest.mocked(require('next/navigation').useRouter).mockReturnValue({ push: mockPush })

    render(<SectionHeader title="test" route="/my-route" viewButton={true} />)

    const viewMoreButton = screen.getByRole('button', { name: /view more/i })
    await user.click(viewMoreButton)

    expect(mockPush).toHaveBeenCalledWith('/my-route')
  })

  it('has correct container classes', () => {
    render(<SectionHeader title="test" route="/test" viewButton={true} />)
    const container = screen.getByText('test').parentElement
    expect(container).toHaveClass('flex', 'items-center', 'pt-0', 'justify-between')
  })

  it('button has ghost variant and cursor-pointer class', () => {
    render(<SectionHeader title="test" route="/test" viewButton={true} />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('cursor-pointer')
    expect(button).toHaveClass('text-[#333333]')
  })
})
