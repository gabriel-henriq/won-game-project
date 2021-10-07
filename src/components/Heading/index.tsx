import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium'
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
}

const Heading = ({
  children,
  color = 'black',
  size = 'medium',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    lineColor={lineColor}
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
  >
    {children}
  </S.Wrapper>
)

export default Heading
