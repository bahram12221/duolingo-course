import style from "./navbar.module.css"
import { NavLink } from "react-router-dom"
import logo from "./logo.jpg"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function Navbar(){
    const [show, setShow] = useState(false)
    const [close, setClose] = useState(false)
    const location = useLocation()
    const isPage = location.pathname === '/'

    return(
        <div className={style.container}>
            <div className={style.logo}>
                <img src={logo} alt="" />
                <h3 className={isPage ? style.whiteColor : ""}><span>Duolingo</span> Language Academy</h3>
            </div>
            <div className={`${style.bars} ${show ? style.hidden : ""} ${close ? style.block : ""}`}><i onClick={() => {setShow(true); setClose(false)}} className="fa-solid fa-bars"></i></div>
            <div className={`${style.xmark} ${close ? style.hidden : ""} ${show ? style.block : ""}`}><i onClick={() => {setClose(true); setShow(false)}} className="fa-solid fa-xmark"></i></div>
            <ul className={`${style.navbar} ${show ? style.humbarger : ''}`}>
                <NavLink className={isPage ? style.whiteColor : ""} to="/"><li></li>Home</NavLink>
                <NavLink className={isPage ? style.whiteColor : ""} to="/courses"><li>Courses</li></NavLink>
                <NavLink className={isPage ? style.whiteColor : ""} to="/about"><li>About</li></NavLink>
                <NavLink className={isPage ? style.whiteColor : ""} to="/contact"><li>Contact</li></NavLink>
                <NavLink  className={`${style.register} ${isPage ? style.whiteColor : ""}`} to="/register"><li>Register</li></NavLink>
                <li></li>
            </ul>
        </div>
    )
}

export default Navbar