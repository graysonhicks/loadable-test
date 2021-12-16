/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  const tenThousand = new Array(10000).fill(1)

  tenThousand.forEach((_, i) => {
    createPage({
      path: `test-${i}`,
      component: path.resolve("./src/templates/load-test.js"),
      context: {
        hasCarousel: Math.random() < 0.5,
        hasHeading: Math.random() < 0.5,
        hasText: Math.random() < 0.5,
        index: i,
      },
    })

    createPage({
      path: `defer-test-${i}`,
      component: path.resolve("./src/templates/load-test.js"),
      defer: true,
      context: {
        hasCarousel: Math.random() < 0.5,
        hasHeading: Math.random() < 0.5,
        hasText: Math.random() < 0.5,
        index: i,
      },
    })
  })
}
