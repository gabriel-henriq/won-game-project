import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    // verificar se o { title, subtlte, img } existe
    const { container } = renderWithTheme(<Banner {...props} />)
    //expect(screen.logTestingPlaygroundURL(container))
    expect(screen.getByRole('heading', { name: /defy death/i }))
      .toBeInTheDocument
    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i })
    ).toBeInTheDocument
    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument
    expect(container.firstChild).toMatchSnapshot()
  })
})
