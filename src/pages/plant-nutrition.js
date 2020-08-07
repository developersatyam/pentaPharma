import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const PlantNutritionPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Plant Nutrition"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Importance of Plant Nutrition
          </h3>
          <figure className="kg-card kg-image-card">
            <Img
              //   style={{ height: "40vh", objectFit: "contain" }}
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="dynamic-styles">PRIMARY NUTRIENTS</h3>
          <p>
            It is the study of chemical elements and compounds that are required
            for plant growth and also the supply to their external environment
            and internal metabolism of these substances.
          </p>

          <h4>NITROGEN</h4>

          <li>
            Necessary for formation of amino acids, the building blocks of
            protein
          </li>
          <li> Essential for plant cell division, vital for plant growth</li>
          <li> Directly involved in photosynthesis </li>
          <li> Necessary component of vitamins </li>
          <li>Aids in production and use of carbohydrates </li>
          <li>Affects energy reactions in the plant</li>

          <h4>PHOSPHORUS</h4>
          <li>
            Involved in photosynthesis, respiration, energy storage and
            transfer, cell division, and enlargement{" "}
          </li>
          <li>Promotes early root formation and growth</li>
          <li>Improves quality of fruits, vegetables, and grains</li>
          <li>Vital to seed formation</li>
          <li>Helps plants survive harsh winter conditions</li>
          <li>Increases water-use efficiency</li>
          <li>Hastens maturity</li>

          <h4>POTASSIUM</h4>
          <li>
            Carbohydrate metabolism and the break down and translocation of
            starches
          </li>
          <li>Increases photosynthesis </li>
          <li>Increases water-use efficiency</li>
          <li>Essential to protein synthesis</li>
          <li>Important in fruit formation</li>
          <li>Activates enzymes and controls their reaction rates</li>

          <h4>SULPHUR</h4>
          <li>Integral part of amino acids</li>
          <li>Helps develop enzymes and vitamins</li>
          <li>Promotes nodule formation on legumes</li>
          <li>Aids in seed production</li>

          <h4>ZINC</h4>
          <li>Aids plant growth hormones and enzyme system</li>
          <li>Necessary for chlorophyll production</li>
          <li>Necessary for carbohydrate formation</li>
          <li>Necessary for starch formation</li>

          <h4>MAGANESE</h4>
          <li>Functions as a part of certain enzyme systems</li>
          <li>Aids in chlorophyll synthesis</li>
          <li>Increases the availability of P and CA</li>

          <h4>BORON</h4>
          <li>
            Essential of germination of pollon grains and growth of pollen tubes{" "}
          </li>
          <li>Essential for seed and cell wall formation</li>
          <li>Necessary for sugar translocation</li>
          <li>Affects nitrogen and carbohydrate</li>
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
    benchAccounting: file(relativePath: { eq: "plant.jpg" }) {
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
      <PlantNutritionPage location={props.location} data={data} {...props} />
    )}
  />
)
