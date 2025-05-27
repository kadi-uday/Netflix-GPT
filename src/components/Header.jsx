import React from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { AVATHAR_URL, LOGO_URL } from '../utils/constants';

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

  return (
       <div
      className={`${
        isBrowse
          ? "bg-gradient-to-b from-black via-black/70 to-transparent py-4 px-8"
          : "bg-transparent mx-10 my-7"
      } w-full fixed top-0 left-0 z-20 flex items-center justify-between`}
    >
      <img
        src={LOGO_URL}
        alt="logo"
        className={`${isBrowse ? "w-32" : "w-56"} ml-5`}
      />

      {isBrowse && (
        <div className="flex items-center space-x-2">
          <img
            src={AVATHAR_URL}
            alt="user"
            className="w-10 h-10 rounded cursor-pointer"
          />
          <button onClick={handleSignOut} className="text-white text-lg font-bold hover:underline">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
