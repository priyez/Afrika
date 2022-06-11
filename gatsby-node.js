exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allPlaceJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (data.errors) {
    console.log("Error  retrieving data", data.errors)
    return
  }

  const detailsPage = require.resolve("./src/pages/details/details.js")

  data.data.allPlaceJson.edges.forEach(edge => {
    createPage({
      path: `/explore/${edge.node.slug}/`,
      component: detailsPage,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
