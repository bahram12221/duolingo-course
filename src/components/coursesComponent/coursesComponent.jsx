import style from "./coursesComponent.module.css"
import { NavLink } from "react-router-dom"

function CoursesComponent(props){
    return(
        <div>
            <div className={style.container}>
                <div className={style.card}>
                    <img src={props.img} alt="img" />
                    <h2>{props.courseName}</h2>
                    <p>{props.info}</p>
                    <p><span>Type of education : </span>{props.typeOfEducation}</p>
                    <p><span>Duration : </span>{props.duration}</p>
                    <p><span>Monthly fee : </span>{props.fee}</p>
                    <button><NavLink to="/register">Register</NavLink></button>
                </div>
            </div>

        </div>
    )
}

export default CoursesComponent