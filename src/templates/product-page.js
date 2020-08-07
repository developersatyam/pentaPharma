import React from "react"
import parse from "html-react-parser"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ProductPage = ({ data }) => {
  const meta = data.allMarkdownRemark.edges[0].node
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title={meta.frontmatter.title}
        keywords={[
          `${meta.frontmatter.title}`,
          `gatsby`,
          `javascript`,
          `react`,
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <u>
            <h3 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
              {meta.frontmatter.title}
            </h3>
          </u>
          <div>{parse(meta.frontmatter.html)}</div>
        </div>
      </article>
    </Layout>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { title: { eq: $slug } } }) {
      edges {
        node {
          frontmatter {
            title
            Category
            html
          }
        }
      }
    }
  }
`
