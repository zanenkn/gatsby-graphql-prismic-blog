import React from 'react'
import { Link } from 'gatsby'

const Article = () => {
  return (
    <Link to='/' className='c-article'>
      <img alt='' src='https://source.unsplash.com/random/800x600' />
      <h2>Name</h2>
    </Link>
  )
}

export default Article