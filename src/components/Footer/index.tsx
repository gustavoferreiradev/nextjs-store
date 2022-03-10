import { FooterBar } from './styles'

function Footer(): JSX.Element {
  return (
    <FooterBar>
      Copyright <span className="brand">Store</span> {new Date().getFullYear()}
    </FooterBar>
  )
}

export default Footer
