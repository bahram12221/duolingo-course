import style from "./about.module.css";
import duolingo from "./imgs/duolingo.jpg";
import duolingo1 from "./imgs/duolingo1.jpg";
import duolingo2 from "./imgs/duolingo2.jpg";
import duolingo3 from "./imgs/duolingo3.jpg";
import duolingo4 from "./imgs/duolingo4.jpg";
import duolingo5 from "./imgs/duolingo5.jpg";
import duolingo6 from "./imgs/duolingo6.jpg";
import duolingo7 from "./imgs/duolingo7.jpg";

function About() {
  return (
    <div className={style.container}>
      <h1>About Duolingo Educational Center</h1>
      <div className={style.parent}>
        <div className={style.imgsParent}>
          <div className={style.imgs}>
            <img src={duolingo} alt="img" />
            <img src={duolingo1} alt="img" />
            <img src={duolingo2} alt="img" />
            <img src={duolingo3} alt="img" />
            <img src={duolingo4} alt="img" />
            <img src={duolingo5} alt="img" />
            <img src={duolingo6} alt="img" />
            <img src={duolingo7} alt="img" />
            <img src={duolingo} alt="img" />
            <img src={duolingo1} alt="img" />
            <img src={duolingo2} alt="img" />
            <img src={duolingo3} alt="img" />
            <img src={duolingo4} alt="img" />
            <img src={duolingo5} alt="img" />
            <img src={duolingo6} alt="img" />
            <img src={duolingo7} alt="img" />
          </div>
        </div>
        <div className={style.info}>
            <p className={style.p}>
              Duolingo Educational Center was established in 1403 with the goal
              of providing better learning opportunities for young people and
              anyone interested in developing new skills. The center offers both
              in-person and online courses in English, Computer, Chinese
              language, Drawing, and German language. We believe that learning
              new skills can create better opportunities for the future. Through
              practical teaching methods and a supportive learning environment,
              we aim to help students improve their knowledge, develop useful
              skills, and prepare for academic and career success.
            </p>
            <div className={style.cards}>
              <div className={style.card1}>
                <h3>10+ Experienced Instructors</h3>
                <p>
                  Dedicated teachers providing quality education and guidance.
                </p>
              </div>
              <div className={style.card2}>
                <h3>200+ Students</h3>
                <p>
                  A growing community of learners improving their skills with
                  us.
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
