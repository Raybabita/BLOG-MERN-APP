
import { useLocation } from "react-router-dom"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./singlePost.css"
import { Link } from 'react-router-dom'
import { Context } from "../../context/Context";


export default function SinglePost() {
  const [post, setPost] = useState({})
  const PF = "http://localhost:3005/images/"
  const location = useLocation();
  const postlocation = (location.pathname.split("/")[2])
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);


  // console.log(postlocation[2])
  useEffect(() => {
    const geSingletPost = async () => {
      const response = await axios.get("/posts/" + postlocation);
      console.log(response.data)
      setPost(response.data);
      setTitle(response.data.title);
      setDesc(response.data.desc);
    };
    geSingletPost();
  }, [postlocation])


  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) { }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) { }
  };

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && <img className="singlePostImg" src={PF + post.photo} alt="" />}
        {
          updateMode ? (<input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />) : (
            <h1 className="singlePostTitle">{title}
              {post.username === user?.username &&
                (
                  <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                    <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                  </div>
                )
              }
            </h1>
          )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author:
            <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link> </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {
          updateMode ? (<textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          ) : (<p className="singlePostDesc">{desc}</p>)
        }

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  )
}
