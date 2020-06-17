import { render, cleanup } from '@redwoodjs/testing'

import ResetPasswordPage from './ResetPasswordPage'

describe('ResetPasswordPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ResetPasswordPage />)
    }).not.toThrow()
  })
})
