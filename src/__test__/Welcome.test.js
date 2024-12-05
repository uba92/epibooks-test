import { render, screen } from '@testing-library/react'
import Welcome from '../components/Welcome'

test('Verifico che il welcome alert sia presente nel DOM', () => {
  render(<Welcome />)
  const welcomeAlert = screen.getByText(/benvenuti in epibooks!/i)
  expect(welcomeAlert).toBeInTheDocument()
})
