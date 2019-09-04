/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({ fromPath: "/page-2", toPath: "/page-1", isPermanent: true })

  // Create pages here
}
