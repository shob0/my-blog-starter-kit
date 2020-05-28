import React from 'react';
import './bodyImage.css';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const StyledBachgroundSectoin = styled(BackgroundImage)`
  width: 100%;
  background-position: top 20% center;
  background-repeat: repeat-y;
  background-size: cover;
  height: 100%;
`;

const TextBox = styled('div')`
  background-image: linear-gradient(#ddbbffaa, #ddbbff00);
  height: 100%;
  color: #fff;
  font-size: 7vw;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledButton = styled('a')`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  color: white;
  cursor: pointer;
  background-color: inherit;
  border: 1px solid white;
  width: 100px;
  border-radius: 25px;
  z-index: 1;
`;

function Image() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "kike-vega.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <StyledBachgroundSectoin
      Tag="section"
      className="background-image"
      fluid={image.sharp.fluid}
      backgroundColor={`#040e18`}
    >
      <TextBox>
        Discover Healthy <br />
        You
        <StyledButton type="button" aria-label="read-more" href="/about">
          Read More
        </StyledButton>
      </TextBox>
    </StyledBachgroundSectoin>
  );
}

export default Image;
