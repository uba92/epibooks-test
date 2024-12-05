import { render, screen } from '@testing-library/react'
import App from '../App'

test('verifica che al primo caricamento della pagina la sezione SingleComment non presenta alcuna istanza', () => {
  render(<App />)
  const SingleComment = screen.queryAllByTestId('single-comment')
  expect(SingleComment).toHaveLength(0)
})
