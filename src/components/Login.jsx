import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {auth} from '../utils/firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AVATHAR_URL, BG_IMG_URL } from '../utils/constants';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);

  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
      if(!isSignInForm) {
         const message = checkValidData(email.current.value, password.current.value, name.current.value);
         // console.log(message);
        setErrorMessage(message);
        // Sign Up form
        if(message) return;

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL : AVATHAR_URL
            }).then(() => {
              // Profile updated!
               const {uid, displayName, email, photoURL} = auth.currentUser;
                  dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              
            }).catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
            console.log(user);
          })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+ errorMessage);
        });
      } 
      else {
        const message = checkValidData(email.current.value, password.current.value);
      // console.log(message);
      setErrorMessage(message);
        // Sign In form
      if(message) return;

      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+ errorMessage);
        });

      };  
  };

  return (
    <div className='relative'>
        <Header />
        <div className='absolute inset-0 -z-10' >
            <img src={BG_IMG_URL} alt='background-img' className='brightness-75 '></img>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black bg-opacity-70 mx-auto right-0 left-0 text-white rounded-lg z-20 top-28 '>
            <h1 className='text-3xl font-bold py-4'>{isSignInForm?"Sign In" : "Sign Up"}</h1>

            { !isSignInForm && (<input ref={name} type='text' placeholder='Name' className=' focus:outline-none focus:ring-2 focus:ring-red-600 p-4 my-4 w-full bg-[#2a2c2a] rounded-lg'></input>)}

            <input ref={email} type='email' placeholder='Email' className=' focus:outline-none focus:ring-2 focus:ring-red-600 p-4 my-4 w-full bg-[#2a2c2a] rounded-lg'></input>

            <input ref={password} type='password' placeholder='Password' className=' focus:outline-none focus:ring-2 focus:ring-red-600 p-4 my-4 w-full bg-[#2a2c2a] rounded-lg'></input>
            
            <button type='button' onClick={handleButtonClick} className='p-4 my-6 w-full rounded-lg text-xl font-bold bg-[#e50914] transition duration-300 ease-in-out hover:bg-[#aa0d12]'>{isSignInForm?"Sign In" : "Sign Up"}</button>

            {errorMessage && (<p className='text-lg font-bold text-red-600 mb-4'>{errorMessage}</p>)}

            <p className='text-white/70'>{isSignInForm?"New to Netflix?" :"Already registered?"} <button type='button' onClick={toggleSignInForm} className='text-white'>{isSignInForm? "Sign Up now" : "Sign In now"}</button></p>
        </form>

    </div>
  
  );
}

export default Login;