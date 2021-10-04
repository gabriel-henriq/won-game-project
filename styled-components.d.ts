import theme from 'styles/theme'

// inference type
type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    grid: {
      container: string
      gutter: string
    }
    border: {
      radius: string
    }
    font: {
      family: string
      light: number
      normal: number
      bold: number
      sizes: {
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
        huge: string
      }
    }
    colors: {
      primary: string
      secondary: string
      mainBg: string
      lightBg: string
      white: string
      black: string
      lightGray: string
      gray: string
      darkGray: string
      red: string
    }
    spacings: {
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
    }
    layers: {
      base: number
      menu: number
      overlay: number
      modal: number
      alwaysOnTop: number
    }
    transition: {
      default: string
      fast: string
    }
  }
}
