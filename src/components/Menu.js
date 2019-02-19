import React, { Component } from 'react'
import Link from 'gatsby-link'

import {
  Container,
  Field,
  Control,
  Button,
  Hero,
  HeroHeader,
  HeroBody,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDivider,
  NavbarDropdown,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
  Icon,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink,
} from 'bloomer'

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
  fontWeight: 700,
}

// const Menu = () => {
//   return (
//     <Header>
//       <Nav>
//         <ul>
//           <li>
//             <Link to="/" activeStyle={activeLinkStyle}>
//               <img src="/logos/allata_black.png"></img>
//             </Link>
//           </li>
//           <li>
//             <Link to="/offerings/" activeStyle={activeLinkStyle}>
//               Offerings
//             </Link>
//           </li>
//           <li>
//             <Link to="/about/" activeStyle={activeLinkStyle}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/insights/" activeStyle={activeLinkStyle}>
//               Insights
//             </Link>
//           </li>
//         </ul>
//       </Nav>
//     </Header>
//   )
// }

// export default Menu

class Menu extends Component {
  state = {
    //This sets the state of Bulma elements
    isActive: false,
  }

  //This toggles the navbar dropdown
  onClickNav = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render() {
    return (
      <Navbar style={{ margin: '0' }}>
        <NavbarBrand style={{ margin: '0 1em 0' }}>
          <NavbarItem>
            <Link to="/" activeStyle={activeLinkStyle}>
              <img src="/logos/allata_black.png" style={{ width: 80 }} />{' '}
            </Link>
          </NavbarItem>
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={this.onClickNav}
          />
        </NavbarBrand>

        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarEnd style={{ marginRight: '1em' }}>
            <NavbarItem>
              <Link to="/offerings/" activeStyle={activeLinkStyle}>
                Offerings
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/about/" activeStyle={activeLinkStyle}>
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/insights/" activeStyle={activeLinkStyle}>
                Insights
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/careers/" activeStyle={activeLinkStyle}>
                Careers
              </Link>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Menu
