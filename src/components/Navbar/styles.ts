import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  p.logo {
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  ul.links {
    display: flex;
  }

  li.navlink {
    list-style: none;
    margin: 0 0.75rem;
    text-transform: uppercase;
  }

  li.navlink a {
    text-decoration: none;
    color: #000;
  }

  li.navlink a:hover {
    color: #f9826c;
  }
`
