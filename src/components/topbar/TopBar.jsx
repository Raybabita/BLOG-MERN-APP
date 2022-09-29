import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import './topbar.css'

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:3005/images/"
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className='top'>
      <div className="top-left">
        <i className="top-icon fa-brands fa-square-facebook"></i>
        <i className="top-icon fa-brands fa-linkedin"></i>
        <i className="top-icon fa-brands fa-square-instagram"></i>
        <i className="top-icon fa-brands fa-square-twitter"></i>
      </div>
      <div className="top-center">
        <ul className='toplist'>
          <li className='toplistItems'>  <Link to="/" className="link">HOME</Link></li>
          <li className='toplistItems'>  <Link to="/" className="link">ABOUT</Link></li>
          <li className='toplistItems'>  <Link to="/" className="link">CONTACT</Link></li>
          <li className='toplistItems'>  <Link to="/write" className="link">WRITE</Link></li>
          <li className='toplistItems' onClick={handleLogout}>
            {user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="top-right">
        {
          user ? (<>
            <Link to="/settings" className="link">
              <img className='profile-img' src={PF + user.profilePic} alt='profile' /></Link>

          </>) : (

            <ul className="toplist">
              <li className="toplistItems"> <Link to="/login" className="link">LOGIN</Link></li>
              <li className="toplistItems"><Link to="/register" className="link">REGISTER</Link></li>
            </ul>
          )
        }
        <i className='searchIcon fas fa-search' />

      </div>
    </div>
  )
}
