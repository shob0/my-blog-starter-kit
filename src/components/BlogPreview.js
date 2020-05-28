import React from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

function BlogPreview(props) {
  const node = props.node
  const title = props.title
  return (
    <>
      <article
        key={node.fields.slug}
        style={{ width: "60%", margin: "8rem auto" }}
      >
        <header>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </section>
      </article>
    </>
  )
}

export default BlogPreview
