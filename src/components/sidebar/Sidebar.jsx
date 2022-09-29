import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import "./sidebar.css"


export default function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const response = await axios.get("/categories")
            console.log(response.data)
            setCats(response.data);
        };
        getCats();
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebarItems">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="aboutMeImg" src="https://res.cloudinary.com/dahw90b2z/image/upload/v1663346740/lady_c5zi6q.jpg" alt="" />
                <p>Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Ipsa, id ad. Adipisci nesciunt facilis totam unde similique
                </p>
            </div>
            <div className="sidebarItems">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {
                        cats.map((eachCat) => (
                            <Link to={`/?cat=${eachCat.name}`} key={eachCat.name} className="link"> <li className="sidebarListItems">
                                {eachCat.name}</li></Link>
                        ))
                    }

                </ul>
            </div>
            <div className="sidebarItems">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcons fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcons fa-brands fa-linkedin"></i>
                    <i className="sidebarIcons fa-brands fa-square-instagram"></i>
                    <i className="sidebarIcons fa-brands fa-square-twitter"></i>
                </div>
            </div>
        </div>
    )
}
