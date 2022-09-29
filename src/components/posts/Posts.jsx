import Post from '../post/Post'
import './posts.css'

export default function Posts({ posts }) {
  return (
    <div className='posts'>
      {
        posts.map((eachPost) => (
          <Post post={eachPost} key={eachPost.title} />
        ))
      }
    </div>
  )
}
