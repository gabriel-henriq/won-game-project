import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading when is passed', () => {
    renderWithTheme(<Heading color="white">Won Games </Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render an border with a line left side with pink color by default', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.5rem solid #F231A5'
    })
  })
  it('should render an border with a line left side and green color when color is passed', () => {
    renderWithTheme(
      <Heading lineLeft lineColor="secondary">
        Won Games
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.5rem solid #3CD3C1'
    })
  })
  it('should render an border with a line bottom side with pink color by default', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
  it('should render an border with a line bottom side with green color when color is passed', () => {
    renderWithTheme(
      <Heading lineBottom lineColor="secondary">
        Won Games
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #3CD3C1',
      {
        modifier: '::after'
      }
    )
  })
})
