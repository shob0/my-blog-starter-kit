import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        alignItems: "center",
        justifyContent: "flex-end",
        fontSize: "0.8rem",
        marginBottom: rhythm(2),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
        }}
        imgStyle={{
          borderRadius: `100%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
        {/* <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a> */}
      </p>
    </div>
  )
}

export default Bio
