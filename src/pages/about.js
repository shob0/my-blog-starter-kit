import React from 'react';
import Layout from '../components/Layout/layout';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

function About() {
  const MyImage = useStaticQuery(graphql`
    query ShobhitQuery {
      image: file(relativePath: { eq: "Shobhit.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div className="index">
      <Layout>
        <div className="about-me">
          <div className="my-details">
            <p>
              I am Shobhit
              <br />{' '}
              <span style={{ fontSize: '18px' }}>
                <u> Nutrition and Fitness Student</u>
              </span>
            </p>
            <p style={{ fontSize: '1rem' }}>
              I am certified nutrition and exercise expert. I have been
              practicing this since last 3 years. I started learnign about
              nutrition when I got the opportunity to take a course. Now, I have
              lost 11Kgs in last 3 months and in my best shape ever. Here I will
              be posting the knowledge and experience that I learnt trainnig
              over the years.
            </p>
          </div>
          <div className="my-image-div">
            <Img
              fluid={MyImage.image.sharp.fluid}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default About;
