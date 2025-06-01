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
            ? "bg-black sm:bg-transparent md:bg-gradient-to-b md:from-black md:to-transparent md:min-h-10 lg:min-h-20 py-3 lg:py-4 px-4 sm:px-6 md:px-8 z-50 md:z-50 "
            : "bg-transparent mx-10 my-7"
        } w-full fixed top-0 left-0 z-20 flex flex-col md:flex-row md:justify-between lg:flex-row items-center lg:items-center justify-center lg:justify-between space-y-4 lg:space-y-0`}
      >
      <img
        src={LOGO_URL}
        alt="logo"
        className={`${isBrowse ? "w-24 md:w-28 md:mt-2.5 md:-ml-3 lg:w-32 " : "w-48 md:w-44 lg:w-56 m-24 ml-6"}  md:ml-5 md:m-0 lg:ml-5 lg:m-0`}
      />

      {isBrowse && (
        <div className="flex items-center ">
          
          <button onClick={handleGptSearchPage} className='text-white mr-6 text-[12px] sm:text-base font-bold px-2 py-1 rounded-sm md:-mt-2.5 md:rounded-md lg:px-3 lg:py-2 lg:rounded-lg bg-red-700 hover:bg-red-800  transition-all whitespace-nowrap break-words w-fit max-w-[120px] text-center ' >{showGptSearch?"Home Page": "GPT Search"}</button>
        
          {showGptSearch && (
            <select className=' w-auto md:-mt-2.5 bg-blue-950 text-white text-[12px] md:text-sm lg:text-lg font-bold px-2 py-1 md:p-2 rounded-sm md:rounded-md lg:p-3 lg:rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer mr-6' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option className='text-white text-[12px] md:text-sm md:-mt-2.5 lg:text-lg font-bold p-2 md:p-3  lg:p-4 rounded-lg bg-blue-950 ' key={lang.identifier} value={lang.identifier}> {lang.name}</option>
            ))}
          </select>
          )}

          <img
            src={AVATHAR_URL}
            alt="user"
            className=" w-5 h-5 md:w-7 md:-mt-2.5 md:h-7 lg:w-10 lg:h-10 mr-2 rounded cursor-pointer"
          />
          
          <button onClick={handleSignOut} className="text-white whitespace-nowrap text-[12px] md:-mt-2.5 md:text-sm lg:text-lg font-bold hover:text-[#de0913] hover:underline mr-5">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
