const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(products)/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(post => {
    const path = "products/" + post.node.frontmatter.title.toLowerCase()
    actions.createPage({
      path,
      component: require.resolve("./src/templates/product-page.js"),
      context: {
        slug: post.node.frontmatter.title,
      },
    })
  })
}
