import React from 'react'
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
  return (
    <div>
        <h2>sign in page</h2>
        <button onClick={logGoogleUser}>
            sign in with google popup
        </button>
        <SignUpForm/>
        
    </div>
    
  )
}

export default SignIn