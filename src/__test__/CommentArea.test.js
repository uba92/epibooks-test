import { screen, render } from '@testing-library/react'
import App from '../App'

test('verifica che CommentArea sia presente nel DOM', async () => {
  render(<App />)
  const CommentArea = await screen.findByPlaceholderText(
    /Inserisci qui il testo/i
  )
  expect(CommentArea).toBeInTheDocument()
})
