const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/pages/post.js')
    resolve(
      graphql(
        `
          {
            allPrismicArticle {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allPrismicArticle.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.id}/`,
            component: blogPost,
            context: {
              id: post.node.id,
            },
          })
        })
      })
    )
  })
}