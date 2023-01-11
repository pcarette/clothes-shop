import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-imput.component";

import "./sign-in-form.styles.scss";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";


const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch()
  const [fields, setFields] = useState(defaultFormFields);
  const { email, password } = fields;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const logGoogleUserPopup = async () => {
    dispatch(googleSignInStart())
  };

  function resetFormFields() {
    setFields(defaultFormFields);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/wrong-password') {
        alert('Wrong Password')
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
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
        <div className="buttons-container">

          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUserPopup}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
