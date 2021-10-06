import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: 'primary' | 'secondary'
}

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    lineColor={lineColor}
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
  >
    {children}
  </S.Wrapper>
)

export default Heading
