import React from 'react'
import { Link } from 'gatsby'

const Article = (props) => {
  return (
    <Link to={`/blog/${props.id}`} className="c-article">
      <div className='w-1/3 h-64 overflow-hidden flex'>
        <img className='object-cover' alt={props.data.image.alt} src={props.data.image.url} />
      </div>
      
      <h2>{props.data.title.text}</h2>
    </Link>
  )
}

export default Article