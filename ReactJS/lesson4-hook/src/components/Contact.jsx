import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const form = useRef();

  const formSubmited = (e) => {
    e.preventDefault();
    if (
      !nameRef.current.value ||
      !surnameRef.current.value ||
      !emailRef.current.value ||
      !phoneRef.current.value ||
      !messageRef.current.value
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please, fill inputs",
      });
    } else {
      emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
        .then(
          () => {
            Swal.fire({
                icon:"success",
                title:"Your message is send successfully!"
            })
          },
          (error) => {
            console.log(error);
            Swal.fire({
                icon:"error",
                title:"Your message is failed to send!"
            })
          }
        );
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <p className={`text-dark h2 mt-5`}>Contact Page</p>
      <div className="col-4 mt-5">
        <form onSubmit={formSubmited} ref={form}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" ref={nameRef} name="name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input type="text" className="form-control" ref={surnameRef} name="surname" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" ref={emailRef} name="email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control" ref={phoneRef} name="phone" />
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <textarea
                ref={messageRef}
                className="form-control"
                style={{ height: 100 }}
                name="message"
              />
              <label>Message</label>
            </div>
          </div>
          <button type="submit" className="btn btn-dark">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
