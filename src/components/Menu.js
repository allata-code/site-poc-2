import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  // background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 2em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  img {
    width: 80px;
  }

  a {
    text-decoration: none;
    color: rgba(0,0,0,0.3);
    font-weight: 700;
    transition: all 0.2s;
    // border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: black;
    }
  }
`

const activeLinkStyle = {
  color: 'black',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              <img src="/logos/allata_black.png"></img>
            </Link>
          </li>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Posts
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
