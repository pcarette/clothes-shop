import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADyotDKNthKqPQ1VKVscYqcLyIi37Jevk",
  authDomain: "crwn-db-f92c2.firebaseapp.com",
  projectId: "crwn-db-f92c2",
  storageBucket: "crwn-db-f92c2.appspot.com",
  messagingSenderId: "403472788071",
  appId: "1:403472788071:web:42e8936c75934fdfd302c2",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt : "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)