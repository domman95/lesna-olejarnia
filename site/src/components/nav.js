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
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  height: 8rem;
  background-color: var(--white);
  border-radius: 5rem;
  box-shadow: ${({ toggled }) => (toggled ? 'none' : 'var(--boxShadow)')};
  display: grid;
  grid-template-columns: 11rem auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  transition: box-shadow 0.3s linear;

  .logo,
  .hamburger-react {
    z-index: 10;
  }

  @media (min-width: 768px) {
    grid-template-columns: 11rem 1fr;
    justify-content: flex-start;

    .hamburger-react {
      display: none;
    }
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: -2rem;
  right: -2rem;
  transform: ${({ toggled }) =>
    toggled ? 'translateX(0)' : 'translateX(100%)'};
  width: 100vw;
  max-width: 40rem;
  height: 100vh;
  background-color: var(--white);
  z-index: 2;
  padding: 16rem 2rem 6rem 2rem;
  transition: transform 0.3s linear;

  li {
    list-style: none;
    font-size: 1.6rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;

    &.details {
      border: none;
    }

    & > details > summary {
      border-bottom: 1px solid rgba(0, 0, 0, 0.6);
      padding-bottom: 0.5rem;
    }
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  details {
    li {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      margin: 1rem;
    }
  }

  summary {
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: url(${details});
      margin-left: 0.5rem;
    }
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    position: static;
    top: 0;
    /* right: 0; */
    width: auto;
    height: auto;
    background-color: transparent;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
    align-items: center;
    max-width: none;

    ul {
      display: flex;
      align-items: center;
    }
  }
`;

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledNav toggled={isOpen}>
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="lesna olejarnia" />
        </Link>
        <LinkWrapper toggled={isOpen}>
          <ul>
            <li>
              <Link to="#o-nas" onClick={() => setOpen(false)}>
                o nas
              </Link>
            </li>
            <li className="details">
              <details>
                <summary>
                  <Link to="#produkty" onClick={() => setOpen(false)}>
                    produkty
                  </Link>
                </summary>
                <ul>
                  <li>
                    <Link to="/oleje">Oleje</Link>
                  </li>
                  <li>
                    <Link to="/oleje2">Oleje 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="#kontakt" onClick={() => setOpen(false)}>
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
    </>
  );
}
