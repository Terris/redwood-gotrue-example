import { render, cleanup } from '@redwoodjs/testing'

import SignInPage from './SignInPage'

describe('SignInPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SignInPage />)
    }).not.toThrow()
  })
})
