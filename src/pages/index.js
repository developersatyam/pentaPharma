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
          <p>
            PENTA PHARMA Pvt. Ltd. was founded by Suresh Kumar Sharda and Rajeev
            Kumar Maheshwari in 1991. We are in the business of Manufacturing
            (Metals & Chemicals, and products thereof). In 1991, we diversified
            into nutrients for plant. We conducted research on compounds that
            could deliver mineral nutrients to plants more efficiently. This
            research identified "Metal Chelates".
          </p>
          <p>
            Through in-house R&D efforts, our Company branched out into
            Agrochemicals in 1975 with the introduction of Chelated
            Micronutrients. We pioneered the concept of Chelates in India with
            the introduction of "Agromin", a micronutrient fertilizer in the
            year 1975, followed by "Chelamin" in 1976.
          </p>
          <p>
            Agromin (chelated micronutrients) and Chelamin (chelated zinc) are
            the company's flagship brands. We are one of the leading
            manufacturer and seller of Chelates in the Country.
          </p>
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
