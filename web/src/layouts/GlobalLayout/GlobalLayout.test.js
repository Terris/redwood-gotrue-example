import { render, cleanup } from '@redwoodjs/testing'

import GlobalLayout from './GlobalLayout'

describe('GlobalLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<GlobalLayout />)
    }).not.toThrow()
  })
})
