import React from "react"
import { Link } from "gatsby"

export default props => (
  <article
    className={`post-card col-4 ${props.postClass} ${
      props.node.frontmatter.thumbnail ? `with-image` : `no-image`
    }`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${
          props.node.frontmatter.thumbnail.childImageSharp.fluid.src
        })`,
      }
    }
  >
    <Link to="/products" className="post-card-link">
      <div className="post-card-content">
        <h2 className="post-card-title">{props.node.frontmatter.title}</h2>
      </div>
    </Link>
  </article>
)
