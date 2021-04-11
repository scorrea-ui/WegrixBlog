import React from 'react'
import Post from './post'

const Posts = ({ posts }) => {
  return (
    <section>
      <div className='c-posts'>
        {/* <h3 className='c-posts__title'>React</h3> */}
        <div className='o-grid'>
          {posts.map((post) => {
            return <Post post={post.node} key={post.node.id} delay={'500'} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Posts
