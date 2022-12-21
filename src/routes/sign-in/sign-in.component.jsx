import React from 'react'
import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response.user)
    response.user = { accessToken }
    console.log(accessToken)
  }

  return (
    <>
    <div>SignIn</div>
    <button onClick={logGoogleUser}>Clique pour tester batard</button>
    </>
  )
}

export default SignIn