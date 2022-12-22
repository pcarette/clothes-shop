import { getRedirectResult } from "firebase/auth";
import React, { useEffect, useContext } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";



const SignIn = () => {
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

  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // For a redirect signup with google, we need to use this :
  //
  // const logGoogleUserRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  // };

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUserPopup}>Clique pour tester batard</button>

      {/*// For a redirect signup with google, we need to use this :

      
      <button onClick={logGoogleUserRedirect}>
        Clique pour tester la redirection
      </button> */}

      <SignUpForm />
    </>
  );
};

export default SignIn;
