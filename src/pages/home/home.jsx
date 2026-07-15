import style from "./home.module.css";
import img1 from "../imgs/homeImg1.jpg";
import img2 from "../imgs/homeImg2.jpg";
import img3 from "../imgs/homeImg3.jpg";
import img4 from "../imgs/homeImg4.jpg";
import { useState, useEffect } from "react";

function Home() {
    const [showLeft, setShowLeft] = useState(false)

    useEffect(() => {
        setShowLeft(true)
    })

  return (
    <div>
      <div className={style.container}>
        <div className={`${style.left} ${showLeft ? style.showLeft : ""}`}>
          <h1>Duolingo Learning Center</h1>
          <h2>Build your future with the right education.</h2>
          <p>
            Teaching English, computers, Chinese, German, Pashto, drawing and
            calligraphy with modern methods and experienced teachers.
          </p>
          <div className={style.leftBtn}>
            <button>Register for courses</button>
            <button>View courses</button>
          </div>
        </div>
        <div className={style.right}>
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
          <img src={img3} alt="img3" />
          <img src={img4} alt="img4" />
        </div>
      </div>
    </div>
  );
}

export default Home;
