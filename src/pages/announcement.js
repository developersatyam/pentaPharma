import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const CareersPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const ann = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Careers"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Announcements
          </h3>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <ol>
            {ann.map((ele, index) => {
              return (
                <div key={index}>
                  <li>
                    <h4 id="dynamic-styles">{ele.node.frontmatter.title}</h4>
                  </li>
                  <p>{ele.node.frontmatter.Description}</p>
                  <p>
                    <u>Issue Date:</u> {ele.node.frontmatter.publishdate}
                  </p>
                </div>
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
        description
      }
    }
    benchAccounting: file(relativePath: { eq: "announcement.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(announcement)/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            Description
            publishdate
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
      <CareersPage location={props.location} data={data} {...props} />
    )}
  />
)
