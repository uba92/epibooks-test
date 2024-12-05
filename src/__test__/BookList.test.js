import { screen, render } from '@testing-library/react'
import App from '../App'

test('verifica che ci siano 150 cards', () => {
  render(<App />)
  const arrayOfCards = screen.getAllByTestId('card')
  expect(arrayOfCards).toHaveLength(150)
})
