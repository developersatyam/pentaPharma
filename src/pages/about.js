import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            PENTA PHARMA Pvt. Ltd. was founded by Suresh Kumar Sharda and Rajeev
            Kumar Maheshwari in 1991.
          </h3>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="dynamic-styles">About Us</h3>
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
    benchAccounting: file(relativePath: { eq: "plants-about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
