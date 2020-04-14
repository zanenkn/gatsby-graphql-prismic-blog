import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js'
import SEO from '../components/seo.js'
import Article from '../components/Article'

const IndexPage = props => (
  <Layout>
    <div className="page">
      <SEO title="My blog" keywords={[`blog`, `gatsby`, `prismic`]} />
      {props.data.articles.edges.map(article => (
        <Article 
        uid={article.node.uid} 
        data={article.node.data} />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
  query Articles {
    articles: allPrismicArticle {
      edges {
        node {
          data {
            image {
              alt
              url
            }
            title {
              text
            }
          }
          uid
        }
      }
    }
  }
`