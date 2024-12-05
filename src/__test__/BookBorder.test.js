import { screen, render, fireEvent } from '@testing-library/react'
import App from '../App'

describe('border test', () => {
  test('Verifica che il bordo cambi colore dopo il click', () => {
    render(<App />)
    const selectedBook = screen.getAllByTestId('card')
    const first = selectedBook[0]
    fireEvent.click(first)
    expect(first).toHaveStyle('border: 3px solid red')
  })
  test('Verifica che al click della seconda card la prima non abbi il bordo rosso', () => {
    render(<App />)
    const selectedBook = screen.getAllByTestId('card')
    const first = selectedBook[0]
    const second = selectedBook[1]
    fireEvent.click(second)
    expect(first).not.toHaveStyle('border: 3px solid red')
  })
})
