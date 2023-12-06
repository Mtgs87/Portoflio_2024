import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  display: flex;
  flex-direction: column;

  @media (min-width: 766px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  font-size: 1.25rem;
  align-items: center;
  line-height: 1.75rem;  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: .1em;
  text-indent: .3em;
  border-bottom: 3px solid transparent;
  &.active {
    border-bottom: 2px solid #7760BC;
    transition: border-bottom .5s ease-in-out;  }
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 767px) {
    font-size: 1.25rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 2rem;
  }
`;

export const NavLinkBlack = styled(Link)`
  font-size: 1.25rem;
  line-height: 1.75rem;  
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: .1em;
  text-indent: .3em;
  border-bottom: 3px solid transparent;
  &.active {
    border-bottom: 2px solid #7760BC;
    transition: border-bottom .5s ease-in-out;  }
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 767px) {
    font-size: 1.25rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 2rem;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  font-size: x-large;
  margin: 10px;
  &.active {
    border-bottom: 3px solid #7760BC;
    transition: border-bottom .5s ease-in-out;  }
    style={{textDecoration: 'none'}}`;



export const OpenLinksButton = styled.button`
  margin-left:20px;
  display:flex;
  width: full;
  height: 50px;
  background: none;
  border: none;
  color: white;
  align-items: center;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 767px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid;
  border-color: white;
  align-items: center;

  @media (min-width: 767px) {
    display: none;
  }
`;

export const NavbarToggleButton = styled.div`
  align-self: center;
  margin-left : 15px;
  @media (max-width: 767px) {
    
  }
`;


export const NavbarToggleButtonExtended = styled.div`
align-self: center;
  `;