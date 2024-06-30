import React, { useRef } from "react";
import Input from "../UI/Input/Input"; // Assuming Input component is defined

export default function NewsletterSignUp() {
  const emailRef = useRef(null);

  const InvalidMsg = () => {
    const emailInput = emailRef.current;
    if (emailInput.value === "") {
      emailInput.setCustomValidity("Required email address");
    } else if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity("Please enter a valid email address");
    } else {
      emailInput.setCustomValidity("");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    InvalidMsg();
    if (emailRef.current.checkValidity()) {
      console.log("Form submitted with email:", emailRef.current.value);
    }
  };

  return (
    <div className="newsletter__container">
      <div className="newsletter__container-title">
        <h3>Newsletter</h3>
      </div>
      <div className="newsletter__container__input-title">
        <h3>Design News to your inbox</h3>
      </div>
      <div className="newsletter__container__input">
        <form onSubmit={handleFormSubmit}>
          <Input
            ref={emailRef}
            className="mb-2"
            type="email"
            placeholder="Email Address"
            required
          />
          <button type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
