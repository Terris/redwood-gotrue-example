import { render, cleanup } from '@redwoodjs/testing'

import ForgotPasswordPage from './ForgotPasswordPage'

describe('ForgotPasswordPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ForgotPasswordPage />)
    }).not.toThrow()
  })
})
