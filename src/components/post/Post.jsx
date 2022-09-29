import { Link } from 'react-router-dom'
import './post.css'

export default function Post({ post }) {
  const PF = "http://localhost:3005/images/"
  return (
    <Link className='link' to={`/post/${post._id}`}>
      <div className='post'>
        {post.photo && (
          <img className='postImg'
            src={PF + post.photo} alt="" />
        )}
        <div className="postInfo">
          <div className="postCat">
            {
              post.categories.map((cat) => (
                <span className="postCat">{cat.name}</span>
              ))
            }
          </div>
          <span className="postTitle">{post.title}</span>
          <hr />
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='postDesc'>
          {post.desc}
        </p>
      </div>
    </Link>
  )
}
