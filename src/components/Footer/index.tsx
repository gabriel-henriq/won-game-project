import Link from 'next/link'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo hideOnMobile={false} size="normal" color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Contact
        </Heading>
        <a href="mailto:support@wongames.com">support@wongames.com</a>
        <a href="tel:2133283719">21 33283719</a>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow Us
        </Heading>
        <nav aria-labelledby="social media">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Youtube</a>
          <a href="#">Facebook</a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/store">
            <a>Store</a>
          </Link>
          <Link href="/explore">
            <a>Explore</a>
          </Link>
          <Link href="/search">
            <a>Search</a>
          </Link>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <address>Rua 7 de Maio</address>
        <address>527 - 89020330</address>
        <address>Rio de Janeiro, Brasil</address>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 © All Rights Reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
