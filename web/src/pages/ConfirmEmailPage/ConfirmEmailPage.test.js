import { render, cleanup } from '@redwoodjs/testing'

import ConfirmEmailPage from './ConfirmEmailPage'

describe('ConfirmEmailPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmEmailPage />)
    }).not.toThrow()
  })
})
