import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./header.css"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  width: 10%;
`

function Header() {
  const logo = useStaticQuery(graphql`
    query MyQuery {
      image: file(relativePath: { eq: "Logo/logo_small.png" }) {
        sharp: childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      <header>
        <Link
          to="/"
          className="nav-link title-link"
          style={{ fontSize: "2rem" }}
        >
          {/* Heahthy<span style={{ color: 'red' }}>U</span> */}
          <StyledImg
            fixed={logo.image.sharp.fixed}
            alt="healthyu words with inverted triangle"
            className="logo-image"
          />
        </Link>
        <nav>
          <div>
            <div
              style={{
                paddingTop: "18px",
              }}
            >
              <button
                type="button"
                className="transparent-btn"
                aria-label="menu-nav-button"
                onClick={() => {
                  document.querySelector(".nav-bar").style.display = "flex"
                  document
                    .querySelector(".close-menu-btn")
                    .classList.remove("none-display")
                }}
              >
                ☰
              </button>
            </div>
            <div className="nav-bar">
              <div className="none-display close-menu-btn">
                <button
                  type="button"
                  className="transparent-btn"
                  aria-label="menu-nav-button"
                  onClick={() => {
                    document.querySelector(".nav-bar").style.display = "none"
                    document
                      .querySelector(".close-menu-btn")
                      .classList.add("none-display")
                  }}
                  style={{ color: "snow" }}
                >
                  X
                </button>
              </div>
              <Link
                to="/about/"
                className="nav-link"
                activeClassName="active-link"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="nav-link"
                activeClassName="active-link"
              >
                Contact
              </Link>

              <Link
                to="/subscribe/"
                className="nav-link"
                activeClassName="active-link"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
