exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(
    `
      query BlogPosts {
        allContentfulComponentBlogPost {
          edges {
            node {
              id
              slug
              pageTitle
              blogPostImage {
                file {
                  url
                }
              }
              blogPostContent {
                raw
              }
              author
              tags
            }
          }
        }
      }
    `
  )

  data.allContentfulComponentBlogPost.edges.forEach((edge) => {
    const slug = edge.node.slug
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: slug,
        id: edge.node.id,
      },
    })
  })
}
