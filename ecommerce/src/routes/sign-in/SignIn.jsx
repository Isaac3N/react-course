import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'

const signIn = () => {
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
    </div>
    
  )
}

export default signIn