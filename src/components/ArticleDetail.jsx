import React from 'react'

const ArticleDetail = props => (
  <>
    <div className='w-full h-64 overflow-hidden flex'>
      <img src={props.image} className='object-cover' />
    </div>
    <h2 className='text-xl font-black mt-2 mb-4'>{props.title}</h2>
    <div
      dangerouslySetInnerHTML={{ __html: props.paragraph }}
    />
  </>
)

export default ArticleDetail