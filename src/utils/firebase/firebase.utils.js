import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADyotDKNthKqPQ1VKVscYqcLyIi37Jevk",
  authDomain: "crwn-db-f92c2.firebaseapp.com",
  projectId: "crwn-db-f92c2",
  storageBucket: "crwn-db-f92c2.appspot.com",
  messagingSenderId: "403472788071",
  appId: "1:403472788071:web:42e8936c75934fdfd302c2",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    
    //This condition will run if the user is not yet on our database

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log("error while creating the user, message : ", error.message)
        }
    }

    return userDocRef;
}