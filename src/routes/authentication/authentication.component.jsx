import { getRedirectResult } from "firebase/auth";
import React, { useEffect, useContext } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import './authentication.styles.scss'



const Authentication = () => {
  // For a redirect signup with google, we need to use this :
  //
  // useEffect(() => {
  //   (async () => {
  //     const res = await getRedirectResult(auth);
  //     if (res) {
  //       const userDocRef = await createUserDocumentFromAuth(res.user);
  //     }
  //   })()
  // }, []);

  // For a redirect signup with google, we need to use this :
  //
  // const logGoogleUserRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  // };

  return (
    <div className="authentication-container">
      
      {/*// For a redirect signup with google, we need to use this :

      
      <button onClick={logGoogleUserRedirect}>
        Clique pour tester la redirection
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
