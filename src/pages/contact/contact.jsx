import style from "./contact.module.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import map from "./map.jpg"

function Contact() {
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
      .send("service_i5i80na", "template_2sji2h9", data, "U5lhFdQ2eB8RJ06ql")
      .then(() => {
        alert("sended message successfully");
        reset();
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  }

  return (
    <div className={style.container}>
        <div className={style.contactTitle}>
        <h1>Contact Us</h1>
        <h3>Get in Touch with Duolingo Educational Center</h3>
        <p>
          If you have any
          questions about our courses, registration process, class schedules, or
          educational services, we would be happy to assist you. Our team is
          ready to guide you in choosing the best learning path.
        </p>
      </div>
      <div className={style.parent}>
      <form onSubmit={handleSubmit(sendEmail)} className={style.form}>
        <h2 className={style.formTitle}>Form</h2>
        <p>Name:</p>
        <input
          type="text"
          placeholder="Enter your Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be longer than 3 characters",
            },
          })}
        />
        {errors.name && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.name.message}
          </p>
        )}
        <p>Last Name:</p>
        <input
          type="text"
          placeholder="Enter your Last Name"
          {...register("lastName", {
            required: "Last name is required",
            minLength: {
              value: 6,
              message: "Last name must be longer than 6 characters",
            },
          })}
        />
        {errors.lastName && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.lastName.message}
          </p>
        )}
        <p>Number:</p>
        <input
          type="text"
          placeholder="Enter your number"
          {...register("number", {
            required: "Number is required",
            minLength: {
              value: 9,
              message: "Number must be greater than 9 number",
            },
          })}
        />
        {errors.number && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.number.message}
          </p>
        )}
        <p>Mesage:</p>
        <textarea
          placeholder="Your Message"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 5,
              message: "Message must be longer than 5 characters",
            },
          })}
        ></textarea>
        {errors.message && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {errors.message.message}
          </p>
        )}
        <button className={style.btn} type="submit">
          Send
        </button>
      </form>
      <div className={style.contactIfo}>
        <h3>Information</h3>
        <div>
            <p><h4>Phone Number : </h4> +93xxxxxxxxxx</p>
            <p><h4>Email : </h4> duolingolanguage@gmail.com</p>
            <p><h4>Address : </h4> Pul-e-Khoshk, Dasht-e-Barchi, Kabul, Afghanistan, Near Imam Zaman Mosque and Dadgar School</p>
            <img src={map} alt="map" />

        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;
