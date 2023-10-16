import React from 'react'
import PostCard from './PostCard'

const PostList = () => {
  return (
    <div className='flex flex-col gap-3'>
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
  )
}

export default PostList