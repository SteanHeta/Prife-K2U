import { Link } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

const Navbar = ({ user }) => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-prifeBlue text-2xl font-bold">Prife K2U</Link>
          <ul className="flex space-x-4 items-center">
            {user ? (
              <>
                <li>
                  <Link to="/appointments" className="text-prifeBlue hover:text-prifeGreen">
                    Appointments
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-prifeBlue hover:text-prifeGreen">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="text-prifeBlue hover:text-prifeGreen">
                    Cart
                  </Link>
                </li>
                <li className="text-gray-600">Welcome, {user.email}</li>
                <li>
                  <button 
                    onClick={handleSignOut} 
                    className="text-red-500 hover:text-red-700"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="text-prifeBlue hover:text-prifeGreen">
                    Login
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={handleGoogleSignIn} 
                    className="text-prifeBlue hover:text-prifeGreen"
                  >
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
};

export default Navbar;