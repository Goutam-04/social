import React from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'

const Feed = () => {
  return (
    <div className='feed'>
    <div className='feddWrapper'>
      <Share/>
      <Post/>
    </div>

    </div>
  )
}

export default Feed