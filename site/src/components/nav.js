import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Divide as Hamburger } from 'hamburger-react';
import details from '../assets/details.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';

const StyledNav = styled.nav`
  position: fixed;
  width: calc(100vw - 4rem);
  max-width: 160rem;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  height: 8rem;
  background-color: var(--white);
  border-radius: 5rem;
  box-shadow: ${({ toggled }) => (toggled ? 'none' : 'var(--boxShadow)')};
  display: grid;
  grid-template-columns: 11rem 1fr;
  align-items: center;
  padding: 0 2rem;
  transition: box-shadow 0.3s linear;
  z-index: 10;

  .logo {
    z-index: 10;
  }
  .hamburger-react {
    display: none;
  }

  @media (max-width: 767px) {
    grid-template-columns: 11rem auto;
    justify-content: space-between;

    .hamburger-react {
      display: block;
    }
  }
`;

const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 11rem;
  align-items: center;

  .details {
    position: relative;

    &:hover .subMenu {
      display: flex;
    }

    .summary::after {
      content: url(${details});
      margin-left: 1rem;
    }

    .subMenu {
      position: absolute;
      display: none;
      flex-direction: column;
      background-color: var(--white);
      box-shadow: var(--boxShadow);
      min-width: 100%;
      padding: 1rem;
      transform: translateY(1rem);
      border-radius: 0.5rem;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  li {
    list-style: none;
    font-size: 1.6rem;

    &.link {
      padding: 1rem 0;
    }

    &.subLink {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding: 0.5rem;
      padding-left: 0;
      white-space: nowrap;

      &:hover {
        background-color: var(--green);
      }

      &:hover a {
        color: var(--white);
      }
    }
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  .socials {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  @media (max-width: 767px) {
    position: fixed;
    top: -2rem;
    right: -2rem;
    width: 100vw;
    max-width: 40rem;
    height: 100vh;
    transform: ${({ toggled }) =>
      toggled ? 'translateX(0)' : 'translateX(100%)'};
    display: flex;
    flex-direction: column;
    padding: 16rem 2rem 6rem 2rem;
    background-color: var(--white);
    justify-content: space-between;
    transition: transform 0.3s linear;

    .details {
      position: static;

      .summary::after {
        content: url(${details});
        margin-left: 1rem;
        cursor: pointer;
        display: none;
      }

      .subMenu {
        position: static;
        display: flex;
        flex-direction: column;
        background-color: var(--white);
        box-shadow: none;
        min-width: 100%;
        padding: 1rem;
        border-radius: 0.5rem;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .link > a {
      display: inline-block;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.6);
      padding-bottom: 0.5rem;
    }
  }
`;

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledNav toggled={isOpen}>
      <Link to="/" className="logo" onClick={() => setOpen(false)}>
        <img src={logo} alt="lesna olejarnia" />
      </Link>
      <LinkWrapper toggle={setOpen} toggled={isOpen}>
        <ul>
          <li className="link">
            <Link to="/#o-nas" onClick={() => setOpen(false)}>
              o nas
            </Link>
          </li>
          <li className="link details">
            <Link
              className="summary"
              to="/#produkty"
              onClick={() => setOpen(false)}>
              produkty
            </Link>
            <ul className="subMenu">
              <li className="subLink">
                <Link to="/oleje">oleje</Link>
              </li>
              <li className="subLink">
                <Link to="/oleje2">oleje 2</Link>
              </li>
            </ul>
          </li>
          <li className="link">
            <Link to="/#kontakt" onClick={() => setOpen(false)}>
              kontakt
            </Link>
          </li>
        </ul>
        <div className="socials">
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </LinkWrapper>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </StyledNav>
  );
}
