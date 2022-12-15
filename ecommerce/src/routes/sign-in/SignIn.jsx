import React, {useEffect} from 'react'
import { getRedirectResult } from "firebase/auth"
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from '../../utils/firebase/firebase'

const SignIn = () => {
    useEffect(()=> {
        async function getResult(){
            const response = await getRedirectResult(auth);
            console.log(response);
            if (response){
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }
        getResult()
    }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    const logGoogleRedirectUser= async () => {
        const {user} = await signInWithGoogleRedirect();
        console.log({user})
    }
  return (
    <div>
        <h2>sign in page</h2>
        <button onClick={logGoogleUser}>
            sign in with google popup
        </button>

        <button onClick={signInWithGoogleRedirect}>
            sign in with google redirect
        </button>
        
    </div>
    
  )
}

export default SignIn