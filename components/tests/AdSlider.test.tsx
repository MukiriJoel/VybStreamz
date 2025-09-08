// components/__tests__/AdSlider.test.tsx
import { render, screen } from '@testing-library/react'
import AdSlider from '../AdSlider'

// Mock react-slick since it's a complex external dependency
jest.mock('react-slick', () => {
  return function MockSlider({ children, beforeChange, ...props }: any) {
    return (
      <div data-testid="mock-slider" {...props}>
        {children}
      </div>
    )
  }
})

// Mock the CarouselDots component
jest.mock('../CarouselDots', () => {
  return function MockCarouselDots({ slides, activeIndex }: any) {
    return <div data-testid="carousel-dots">Dots: {activeIndex}</div>
  }
})

describe('AdSlider', () => {
  it('renders without crashing', () => {
    render(<AdSlider />)
    
    const slider = screen.getByTestId('mock-slider')
    expect(slider).toBeInTheDocument()
  })

  it('renders with default slides when no slides provided', () => {
    render(<AdSlider />)
    
    const images = screen.getAllByAltText('Advertisement')
    expect(images).toHaveLength(3) // Based on your hardcoded slides
  })

  it('renders with custom slides when provided', () => {
    const customSlides = [
      { id: 1, image: '/test-image.png' },
      { id: 2, image: '/test-image2.png' }
    ]
    
    render(<AdSlider slides={customSlides} />)
    
    const slider = screen.getByTestId('mock-slider')
    expect(slider).toBeInTheDocument()
  })

  it('renders carousel dots', () => {
    render(<AdSlider />)
    
    const dots = screen.getByTestId('carousel-dots')
    expect(dots).toBeInTheDocument()
  })

  it('applies custom delay prop', () => {
    render(<AdSlider delay={5000} />)
    
    const slider = screen.getByTestId('mock-slider')
    expect(slider).toBeInTheDocument()
  })
})