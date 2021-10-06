import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const lineLeftColor = {
  primary: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.5rem solid ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.5rem solid ${theme.colors.secondary};
  `
}

const lineBottomColor = {
  primary: (theme: DefaultTheme) => css`
    position: relative;
    padding-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: 2.5rem;
      content: '';
      width: 4rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    position: relative;
    padding-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: 2.5rem;
      content: '';
      width: 4rem;
      border-bottom: 0.5rem solid ${theme.colors.secondary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineColor, lineLeft, lineBottom }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineLeft && lineColor && lineLeftColor[lineColor](theme)}
    ${lineBottom && lineColor && lineBottomColor[lineColor](theme)}
  `}
`