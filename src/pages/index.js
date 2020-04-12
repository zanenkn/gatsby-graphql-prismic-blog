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
        id={article.node.id} 
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
          id
          data {
            title {
              text
            }
            image {
              url
              alt
            }
          }
        }
      }
    }
  }
`