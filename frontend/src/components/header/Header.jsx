import { HeaderStyled } from './Header.styled'
function Header ({ label }) {
  return (
    <HeaderStyled>
      <h1>{label}</h1>
    </HeaderStyled>
  )
}

export default Header
