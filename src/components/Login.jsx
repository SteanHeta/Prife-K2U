import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from "../firebase";

export default function Login({ renderPage }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      auth.signInWithEmailAndPassword(email, password)
        .then(() => renderPage("home"))
        .catch((err) => alert(err.message));
    } else {
      auth.createUserWithEmailAndPassword(email, password)
        .then(() => renderPage("home"))
        .catch((err) => alert(err.message));
    }
  };

  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then(() => renderPage("home"));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8">
      <div className="md:flex">
        <div className="md:w-1/2 bg-prifeBlue p-8 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold text-center">Welcome to Prife K2U</h2>
        </div>
        <div className="md:w-1/2 p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-prifeBlue focus:border-transparent"
                required
              />
            </div>
            <button type="submit" className="w-full bg-prifeBlue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <button onClick={signInWithGoogle} className="w-full bg-red-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600 transition duration-300">
            Sign in with Google
          </button>
          <button onClick={() => setIsLogin(!isLogin)} className="w-full text-center text-prifeBlue hover:text-prifeGreen mt-4">
            {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}