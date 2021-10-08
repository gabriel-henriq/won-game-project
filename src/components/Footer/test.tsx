import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    // contact, follow us, links and location
    renderWithTheme(<Footer />)

    expect(screen.getByRole('heading', { name: /contact/i }))
    expect(screen.getByRole('heading', { name: /follow us/i }))
    expect(screen.getByRole('heading', { name: /links/i }))
    expect(screen.getByRole('heading', { name: /location/i }))
  })
})
