import style from "./register.module.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";

function Register() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  function sendEmail(data) {
    emailjs
      .send("service_io9rk44", "template_8x9j8lh", data, "v85TfCvYMU3ObAiHt")
      .then(() => {
        alert("Your message has been successfully sent will be answered soon.");
        reset();
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  }
  return (
    <div className={`${style.container} ${isHome ? style.bgNone : ""}`}>
      <h1 className={style.title}>Registration</h1>
      <p>
        To join Duolingo training courses, complete the form below. Our team
        will contact you after reviewing the information.
      </p>
      <form className={style.form} onSubmit={handleSubmit(sendEmail)}>
        <p>Full Name:</p>
        <input
          type="text"
          placeholder="Enter your Full Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 6,
              message: "Name must be longer than 6 characters",
            },
          })}
        />
        {errors.name && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.name.message}
          </p>
        )}
        <p>Number:</p>
        <input
          type="text"
          placeholder="Enter your Phone Number"
          {...register("phone", {
            required: "Phone is required",
            minLength: {
              value: 9,
              message: "Phone must be longer than 9 number",
            },
          })}
        />
        {errors.phone && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.phone.message}
          </p>
        )}
        <p>Select Course:</p>
        <select {...register("course", {})}>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Chinese">Chinese</option>
          <option value="Pashto">Pashto</option>
          <option value="Computer">Cumputer</option>
          <option value="Drawing">Drawing</option>
          <option value="Calligraphy">English</option>
        </select>
        <p>Learning Type:</p>
        <select {...register("learning", {})}>
          <option value="In-person">In-person</option>
          <option value="Online">Online</option>
        </select>
        <p>Message:</p>
        <textarea
          placeholder="Message(Optional)"
          {...register("message", {})}
        ></textarea>
        <button type="submit">Register Now</button>
      </form>
    </div>
  );
}

export default Register;
