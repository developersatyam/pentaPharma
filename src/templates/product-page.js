import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ProductPage = ({ data }) => {
  const meta = data.allMarkdownRemark.edges[0].node
  const siteTitle = data.site.siteMetadata.title
  console.log(meta)
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
          <figure className="kg-card kg-image-card kg-width-full">
            <Img fluid={data.frontmatter.image} className="kg-image" />
          </figure>
          <p content={meta.html} />

          {/* <div>
            <h4 id="dynamic-styles">Description</h4>
            <p>{meta.Description}</p>
          </div>

          <div>
            <h4 id="dynamic-styles">Features</h4>
            <p>{meta.Features}</p>
          </div>
          <div>
            <h4 id="dynamic-styles">Composition</h4>
            <p>{meta.Composition}</p>
          </div>

          <div>
            <h4 id="dynamic-styles">Caution</h4>
            <p>{meta.Caution}</p>
          </div>

          <div>
            <h4 id="dynamic-styles">Packs</h4>
            <p>{meta.Packs}</p>
          </div> */}
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
          html
          frontmatter {
            title
            Category
            image
          }
        }
      }
    }
  }
`
