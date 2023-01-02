import React, { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import FormInput from "../form-input/form-imput.component";

import { UserContext } from "../../contexts/user.context";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [fields, setFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = fields;

  console.log("hit");

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
    console.log(fields);
  };

  function resetFormFields() {
    setFields(defaultFormFields);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email, 
        password
      );

      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
