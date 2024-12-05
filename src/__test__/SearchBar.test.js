import { screen, render, fireEvent } from '@testing-library/react'
import App from '../App'

describe('SearchBar test', () => {
  test('la ricerca "master" produce 2 risultati', async () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/cerca un libro/i)
    fireEvent.change(input, { target: { value: 'master' } })
    const arrayOfBooks = await screen.findAllByTestId('card')
    expect(arrayOfBooks).toHaveLength(2)
  })
})
