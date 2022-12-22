import React from 'react'
import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <>
    <div>SignIn</div>
    <button onClick={logGoogleUser}>Clique pour tester batard</button>
    </>
  )
}

export default SignIn