import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth";
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfBU3wZRQtRIVH4DcypyKGaISJsJtmohM",
  authDomain: "sg-ecommerce-511b4.firebaseapp.com",
  projectId: "sg-ecommerce-511b4",
  storageBucket: "sg-ecommerce-511b4.appspot.com",
  messagingSenderId: "512087379821",
  appId: "1:512087379821:web:6d13c55eff5131395ad464"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt
            })
        } catch (err) {
            console.log('Error creating the user, ', err);
        }
    }
    
    return userDocRef;
};