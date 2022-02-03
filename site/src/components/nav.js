import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled, { css } from 'styled-components';
import logo from '../assets/logo.png';
import { Divide as Hamburger } from 'hamburger-react';
import details from '../assets/details.svg';
import { GatsbyImage } from 'gatsby-plugin-image';

const StyledNav = styled.nav`
  position: relative;
  position: fixed;
  width: calc(100vw - 4rem);
  /* max-width: 160rem; */
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
  transition: 0.3s linear;
  z-index: 10;

  ${({ toggled }) =>
    toggled &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: -2rem;
        right: 0;
        width: 100vw;
        height: calc(100vh + 2rem);
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 11;
      }
    `}

  ${({ position }) =>
    position > 200 &&
    css`
      width: 100vw;
      top: 0;
      border-radius: 0;
      box-shadow: none;
      border-bottom: 1px solid var(--green);
    `}

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
      z-index: 12;
    }
  }
`;

const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 11rem;
  align-items: center;
  z-index: 12;

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

    ${({ position }) =>
      position > 200 &&
      css`
        top: 0;
        right: 0;
      `}

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
  const [posY, setPosY] = useState();

  useEffect(() => {
    const checkScrollY = () => setPosY(window.scrollY);

    window.addEventListener('scroll', checkScrollY);

    return () => {
      window.removeEventListener('scroll', checkScrollY);
    };
  }, [posY]);

  const data = useStaticQuery(graphql`
    query categoryName {
      category: allSanityCategory {
        nodes {
          id
          slug {
            current
          }
          title
        }
      }

      socials: allSanityContact(
        filter: {
          iconsAndLinks: {
            elemMatch: { name: { eq: "facebook/lesnaolejarnia" } }
          }
        }
      ) {
        nodes {
          iconsAndLinks {
            url
            id
            icon {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const category = data.category.nodes;
  const socials = data.socials.nodes;

  return (
    <StyledNav toggled={isOpen} position={posY}>
      <Link to="/" className="logo" onClick={() => setOpen(false)}>
        <img src={logo} alt="lesna olejarnia" />
      </Link>
      <LinkWrapper toggle={setOpen} toggled={isOpen} position={posY}>
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
              {category.map(({ id, title, slug }) => (
                <li className="subLink" key={id}>
                  <Link to={`/${slug.current}`} onClick={() => setOpen(false)}>
                    {title.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="link">
            <Link to="/#kontakt" onClick={() => setOpen(false)}>
              kontakt
            </Link>
          </li>
        </ul>
        <div className="socials">
          {socials[0].iconsAndLinks.map(({ id, url, icon }) => (
            <a href={url} key={id}>
              <GatsbyImage image={icon.asset.gatsbyImageData} alt={url} />
            </a>
          ))}
        </div>
      </LinkWrapper>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </StyledNav>
  );
}
