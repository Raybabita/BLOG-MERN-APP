
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from "axios";
import './home.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([])
  const { search } = useLocation();
  console.log(search)

  useEffect(() => {
    const getAllPosts = async () => {
      const fetchPosts = await axios.get("/posts" + search);
      // console.log(fetchPosts);
      setPosts(fetchPosts.data);
    }
    getAllPosts();
  }, [search]);



  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
} 
