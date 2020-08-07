import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
/* eslint-disable */
// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" keywords={[`pharma`, `penta`, `javascript`, `react`]} />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )}
      <div className="post-feed row">
        {posts.map(({ node }, index) => {
          postCounter++
          return (
            <PostCard
              key={index}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <blockquote>
            PENTA PHARMA PRIVATE LIMITED is in Kanpur Nagar and registered
            address is 79-Govt. Industrial Estate Ranis, Kanpur (Dehat) Uttar
            Pradesh INDIA 208011. PENTA PHARMA PRIVATE LIMITED CIN no is
            <u> U24231UP1991PTC013617</u> and registered on 17/10/91. The
            Authorized Capital of PENTA PHARMA PRIVATE LIMITED is 1000000 and
            Paid Up capital is 955000. PENTA PHARMA PRIVATE LIMITED principal
            business activities are Manufacturing (Metals &amp; Chemicals, and
            products thereof).
          </blockquote>
        </div>
      </article>

      <div className="post-content-body">
        <h2 style={{ textAlign: "center" }} id="dynamic-styles">
          Serving <span className="green-span">Farmers</span> everywhere.
        </h2>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-4">
            <h3>1991</h3>
            <p>Established</p>
          </div>
          <div className="col-4">
            <h3>1000000+</h3>
            <p>Authorize Capital</p>
          </div>
          <div className="col-4">
            <h3>955000+</h3>
            <p>Paid-up Capital</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"}} ) {
      edges {
        node  {
          excerpt
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
