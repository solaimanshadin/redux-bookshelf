import React from "react";
import bookShelf from "../images/bookshelf.svg";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../lib/auth";
const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div
      className='d-flex flex-column align-items-center justify-content-center'
      style={{ height: "100vh" }}
    >
      <h5 className='mb-5'>
        Book<strong className='text-primary '>Shelf</strong>
      </h5>
      <img className='w-25 pb-4' src={bookShelf} alt='' />
      <button onClick={signInWithGoogle} className='btn btn-light'>
        <FcGoogle className='me-3' /> Sign in with Google
      </button>
    </div>
  );
};

export default Login;
