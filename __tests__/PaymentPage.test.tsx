import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import PaymentPage from "@/app/payment/page"
import { useRouter } from "next/navigation"

// ✅ Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}))

describe("Payment Page", () => {
  let mockPush: jest.Mock

  beforeEach(() => {
    mockPush = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
  })

  it("shows OTP modal when Pay button is clicked", async () => {
    render(<PaymentPage />)

    // Click Pay
    fireEvent.click(screen.getByRole("button", { name: /pay/i }))

    expect(await screen.findByText(/verify phone number/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /verify/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /resend/i })).toBeInTheDocument()
  })

  it("shows Payment Confirmed modal when Verify is clicked", async () => {
    render(<PaymentPage />)

    fireEvent.click(screen.getByRole("button", { name: /pay/i }))
    const verifyButton = await screen.findByRole("button", { name: /verify/i })

    fireEvent.click(verifyButton)

    expect(await screen.findByText(/payment confirmed/i)).toBeInTheDocument()
  })

  it("hides OTP modal when Resend is clicked", async () => {
    render(<PaymentPage />)

    fireEvent.click(screen.getByRole("button", { name: /pay/i }))
    const resendButton = await screen.findByRole("button", { name: /resend/i })

    fireEvent.click(resendButton)

    await waitFor(() =>
      expect(screen.queryByText(/verify phone number/i)).not.toBeInTheDocument()
    )
  })

  it("navigates to preference when clicking Explore More", async () => {
    render(<PaymentPage />)

    fireEvent.click(screen.getByRole("button", { name: /pay/i }))
    fireEvent.click(await screen.findByRole("button", { name: /verify/i }))

    const exploreButton = await screen.findByRole("button", { name: /explore more/i })
    fireEvent.click(exploreButton)

    expect(mockPush).toHaveBeenCalledWith("/preference")
  })

  it("navigates to subscriptions when clicking My Subscriptions", async () => {
    render(<PaymentPage />)

    fireEvent.click(screen.getByRole("button", { name: /pay/i }))
    fireEvent.click(await screen.findByRole("button", { name: /verify/i }))

    const subscriptionsButton = await screen.findByRole("button", { name: /my subscriptions/i })
    fireEvent.click(subscriptionsButton)

    expect(mockPush).toHaveBeenCalledWith("/profile/")
  })
})
