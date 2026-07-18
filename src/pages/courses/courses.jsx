import CoursesComponent from "../../components/coursesComponent/coursesComponent";
import style from "./courses.module.css";
import english from "./img/english.jpg";
import german from "./img/german.jpg";
import drawing from "./img/drawing.jpg";
import chinese from "./img/chinese.jpg";
import computer from "./img/computer.jpg";
import pashto from "./img/pashto.jpg";
import calligraphy from "./img/calligraphy.jpg";

function Courses() {
  return (
    <div className={style.container}>
      <h1>Our Courses</h1>
      <div className={style.parent}>
        <CoursesComponent
          img={english}
          courseName="English"
          info="Teaching Grammar, speeking, listening, writing and reading."
          typeOfEducation="In-person"
          duration="12 month"
          fee="500Afg"
        />
        <CoursesComponent
          img={german}
          courseName="German"
          info="Teaching speeking, listening, writing and reading."
          typeOfEducation="Online & In-person"
          duration="12 month"
          fee="1000Afg"
        />
        <CoursesComponent
          img={computer}
          courseName="Computer"
          info="Teaching  windows, office package, word and excel."
          typeOfEducation="In-person"
          duration="4 month"
          fee="500Afg"
        />
        <CoursesComponent
          img={chinese}
          courseName="Chinese"
          info="Teaching Grammar, speeking, listening, writing and reading."
          typeOfEducation="In-person"
          duration="12 month"
          fee="1000Afg"
        />
        <CoursesComponent
          img={pashto}
          courseName="Pashto"
          info="Teaching Grammar, speeking, listening, writing and reading."
          typeOfEducation="In-person"
          duration="3 month"
          fee="400Afg"
        />
        <CoursesComponent
          img={calligraphy}
          courseName="Calligraphy"
          info="From the alphabet to a board Step-by-step teaching of Islamic calligraphy."
          typeOfEducation="In-person"
          duration="12 month"
          fee="First six months 300Afg second months 500Afg"
        />
        <CoursesComponent
          img={drawing}
          courseName="Drawing"
          info="Basic training of drawing with pencil, charcoal and watercolor, from the basics to creating a work of art."
          typeOfEducation="In-person & Online"
          duration="12 month"
          fee="First six months 300Afg second months 500Afg"
        />
      </div>
    </div>
  );
}

export default Courses;
