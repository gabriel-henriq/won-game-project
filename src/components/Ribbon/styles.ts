import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.15, theme.colors[color])};
      border-top-color: ${darken(0.15, theme.colors[color])};
    }
  `,
  small: (theme: DefaultTheme) => css`
    height: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    right: -1.3rem;
    border-top-left-radius: ${theme.border.radius};
    border-bottom-left-radius: ${theme.border.radius};
    border-top-right-radius: ${theme.border.radius};

    &::before {
      top: ${theme.spacings.small};
      border-top-width: 0.6rem;
      border-right-width: 1.3rem;
    }
  `,
  normal: (theme: DefaultTheme) => css`
    height: calc(${theme.spacings.medium} + 0.4rem);
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    right: -2rem;
    border-top-left-radius: ${theme.border.radius};
    border-bottom-left-radius: ${theme.border.radius};
    border-top-right-radius: ${theme.border.radius};

    &::before {
      top: 3.6rem;
      border-top-width: 0.9rem;
      border-right-width: 2rem;
    }
  `,
  large: (theme: DefaultTheme) => css`
    height: ${theme.spacings.large};
    font-size: ${theme.font.sizes.large};
    padding: 0 ${theme.spacings.medium};
    right: -2.5rem;
    border-top-left-radius: ${theme.border.radius};
    border-bottom-left-radius: ${theme.border.radius};
    border-top-right-radius: ${theme.border.radius};

    &::before {
      top: 4rem;
      border-top-width: 1.2rem;
      border-right-width: 2.5rem;
    }
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    display: flex;
    align-items: center;

    position: absolute;
    top: ${theme.spacings.xsmall};

    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    &::before {
      position: absolute;
      content: '';
      right: 0;
      border-style: solid;
      border-left-color: transparent;
      border-bottom-color: transparent;
      border-left-width: 0rem;
      border-bottom-width: 0rem;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!color && wrapperModifiers.color(theme, color)}
  `}
`
