import React from "react";
import { Wrapper } from "./EmailForm.styles";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const EmailForm = () => {
   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const form = useRef();

   const isValidEmail = (email) =>
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
         email
      );

   const handleEmailValidation = (email) => {
      console.log("ValidateEmail was called with", email);

      const isValid = isValidEmail(email);

      const validityChanged =
         (errors.email && isValid) || (!errors.email && !isValid);
      if (validityChanged) {
         console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
      }

      return isValid;
   };

   const sendEmail = (e) => {
      e.preventDefault();
      // const target = e.target;
      // const name = target.name;
      // const email = target.email;
      // const message = target.message;
      // const data = {
      //    name: name.value,
      //    email: email.value,
      //    message: message.value,
      // };

      console.log("help");
      // console.log(name.value);
      // console.log(data);
      emailjs
         .sendForm(
            `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
            `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
            form.current,
            `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`
         )
         .then(
            (result) => {
               console.log(result.text);
               alert("message sent");
               reset();
            },
            (error) => {
               console.log(error.text);
            }
         );
      reset();
   };
   return (
      <Wrapper>
         <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <br />
            <input
               type="text"
               placeholder="Name"
               // name="name"
               {...register("name", {
                  required: "name is required",
               })}
            />
            <br />
            {errors.name?.type === "required" && (
               <>
                  <small className="form-error">{errors.name.message}</small>
                  <br />
               </>
            )}
            <label>Email</label>
            <br />
            <input
               type="email"
               placeholder="Email"
               name="email"
               {...register("email", {
                  required: "email is required",
                  validate: handleEmailValidation,
               })}
            />
            <br />
            {errors.email?.type === "required" && (
               <>
                  <small className="form-error">{errors.email.message}</small>
                  <br />
               </>
            )}
            {errors.email?.type === "validate" && (
               <>
                  <small className="form-error">Enter valid email</small>
                  <br />
               </>
            )}

            <label>Message</label>
            <br />
            <textarea
               placeholder="Message"
               // name="message"
               cols="5"
               rows="10"
               {...register("message", {
                  required: "message is required",
               })}
            />
            <br />
            {errors.message?.type === "required" && (
               <>
                  <small className="form-error">{errors.message.message}</small>
                  <br />
               </>
            )}
            <input type="submit" value="Send" className="button"></input>
         </form>
      </Wrapper>
   );
};

export default EmailForm;
