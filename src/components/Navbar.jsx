import React from "react";
import { auth, googleProvider } from "../firebase";

export default function Navbar({ user, renderPage }) {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
      .then(() => renderPage("home"))
      .catch((error) => console.error("Google sign-in error:", error));
  };

  const signOut = () => {
    auth.signOut()
      .then(() => renderPage("login"))
      .catch((error) => console.error("Sign out error:", error));
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-prifeBlue text-2xl font-bold">Prife K2U</h1>
          <ul className="flex space-x-4">
            {user ? (
              <>
                <li>Welcome, {user.email}</li>
                <li>
                  <button onClick={signOut} className="text-red-500 hover:text-red-700">
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button onClick={() => renderPage("login")} className="text-prifeBlue hover:text-prifeGreen">
                    Login
                  </button>
                </li>
                <li>
                  <button onClick={signInWithGoogle} className="text-prifeBlue hover:text-prifeGreen">
                    Sign in with Google
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}