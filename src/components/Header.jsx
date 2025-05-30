import React from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { AVATHAR_URL, LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSearchSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = ({ variant = "default" }) => {
  const isBrowse = variant === "browse";
  const navigate = useNavigate();
  const dispatch = useDispatch();

 const handleSignOut = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        navigate("/error");
    });
  };

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in    
    const {uid, displayName, email} = user;
    dispatch(addUser({uid: uid, email: email, displayName: displayName}));
    navigate("/browse");
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/");
  }
});
    // Unsubscribes when component unmounts.
    return () => unsubscribe();
    }, []);

    const handleGptSearchPage = () => {
      dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
    };

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
       <div
      className={`${
        isBrowse
          ? "bg-gradient-to-b from-black via-black/80 to-transparent py-4 px-8 z-50"
          : "bg-transparent mx-10 my-7"
      } w-full fixed top-0 left-0 z-20 flex items-center justify-between`}
    >
      <img
        src={LOGO_URL}
        alt="logo"
        className={`${isBrowse ? "w-32 " : "w-56"} ml-5`}
      />

      {isBrowse && (
        <div className="flex items-center ">
        
          {showGptSearch && (
            <select className=' w-auto bg-blue-950 text-white text-lg font-bold p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option className='text-white text-lg font-bold p-4 rounded-lg bg-blue-950 ' key={lang.identifier} value={lang.identifier}> {lang.name}</option>
            ))}
          </select>
          )}

          <button onClick={handleGptSearchPage} className='text-white text-lg font-bold p-2 rounded-lg bg-red-700 hover:bg-red-800 transition-all mx-8' >{showGptSearch?"Home Page": "GPT Search"}</button>
          <img
            src={AVATHAR_URL}
            alt="user"
            className="w-10 h-10 mr-2 rounded cursor-pointer"
          />
          
          <button onClick={handleSignOut} className="text-white text-lg font-bold hover:text-[#de0913] hover:underline mr-5">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
