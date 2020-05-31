import React from "react"
import Layout from "../components/Layout/layout"
import Image from "../components/BodyImage/bodyImage"
import ContactForm from "../components/Contact/contactForm"
import BlogPreview from "../components/BlogPreview"
import { graphql } from "gatsby"

import "./global.css"

export default function Home({ data, location }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <div className="index">
      <Layout>
        <Image />

        <h2>Blog Posts</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <BlogPreview node={node} title={title} key={node.fields.slug} />
          )
        })}
        <ContactForm />
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
