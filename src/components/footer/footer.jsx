import style from "./footer.module.css";
import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <i style={{ color: "lightgreen" }} className="fa-solid fa-leaf"></i>
        <h2 >Duolingo Educational Center</h2>
      </div>
      <div className={style.columns}>
            <div className={style.first}>
                <h3>Quick Links</h3>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className={style.second}>
                <h3>Our Courses</h3>
                <p>English</p>
                <p>German</p>
                <p>Chinese</p>
                <p>Pashto</p>
                <p>Computer</p>
                <p>Drawing</p>
                <p>Calligraphy</p>
            </div>
            <div className={style.third}>
                <h3>Contact Us</h3>
                <ul>
                        <li><i className="fa-solid fa-envelope"></i> hassanalex041@gmail.com</li>
                        <li><i className="fa-solid fa-phone"></i>  +93766379041</li>
                        <li><i className="fa-solid fa-location-dot"></i>  Pul-e-Khoshk, Dasht-e-Barchi, Kabul, Afghanistan, Near Imam Zaman Mosque and Dadgar School</li>
                    </ul>
            </div>
            <div className={style.fourth}>
                <h3>Social Media</h3>
                <ul>
                    <li><i className="fa-brands fa-facebook"></i>   Facebook</li>
                    <li><i className="fa-brands fa-instagram"></i>   Instagram</li>
                    <li><i className="fa-brands fa-telegram"></i>   Telegram</li>
                    <li><i className="fa-brands fa-whatsapp"></i>   WhatsApp</li>
                </ul>
            </div>
      </div>
      <p>© 2026 Duolingo Educational Center. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
