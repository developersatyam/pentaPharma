import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ProductsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const meta = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Products"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Our Products
          </h2>
          <h4 id="ordered">BIO MANURE</h4>
          <ol>
            {meta.map(ele => {
              if (ele.node.frontmatter.Category === "BIO MANURE")
                return (
                  <Link
                    to={`products/${ele.node.frontmatter.title.toLowerCase()}`}
                  >
                    <li>{ele.node.frontmatter.Name}</li>
                  </Link>
                )
            })}
          </ol>
          <h4 id="ordered">HERBICIDES</h4>
          <ol>
            {meta.map(ele => {
              if (ele.node.frontmatter.Category === "HERBICIDES")
                return (
                  <Link
                    to={`products/${ele.node.frontmatter.title.toLowerCase()}`}
                  >
                    <li>{ele.node.frontmatter.Name}</li>
                  </Link>
                )
            })}
          </ol>
          <h4 id="ordered">INSECTICIDES</h4>
          <ol>
            {meta.map(ele => {
              if (ele.node.frontmatter.Category === "INSECTICIDES")
                return (
                  <Link
                    to={`products/${ele.node.frontmatter.title.toLowerCase()}`}
                  >
                    <li>{ele.node.frontmatter.Name}</li>
                  </Link>
                )
            })}
          </ol>
          <h4 id="ordered">MULTI-MICRONUTRIENT FERTILIZERS MIXTURES</h4>
          <ol>
            {meta.map(ele => {
              if (
                ele.node.frontmatter.Category ===
                "MULTI-MICRONUTRIENT FERTILIZERS MIXTURES"
              )
                return (
                  <Link
                    to={`products/${ele.node.frontmatter.title.toLowerCase()}`}
                  >
                    <li>{ele.node.frontmatter.Name}</li>
                  </Link>
                )
            })}
          </ol>
          <h4 id="ordered">SEEDS</h4>
          <ol>
            {meta.map(ele => {
              if (ele.node.frontmatter.Category === "SEEDS")
                return (
                  <Link
                    to={`products/${ele.node.frontmatter.title.toLowerCase()}`}
                  >
                    <li>{ele.node.frontmatter.Name}</li>
                  </Link>
                )
            })}
          </ol>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(products)/" } }) {
      edges {
        node {
          frontmatter {
            title
            Category
            Name
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
      <ProductsPage location={props.location} data={data} {...props} />
    )}
  />
)
