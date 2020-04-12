import React from 'react'
import Article from '../components/Article'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <div className='page'>
      <SEO title='Home - blog' keywords={[`blog`, `gatsby`]} />
      <Article />
    </div>
  </Layout>
)

export default IndexPage
