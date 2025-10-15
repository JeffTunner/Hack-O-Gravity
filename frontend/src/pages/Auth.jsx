import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import GuestLogin from '../components/auth/GuestLogin';

export function Auth() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 min-h-screen text-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-md w-full bg-gray-900/80 rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-extrabold text-blue-300 mb-4 text-center tracking-tight">
            {showSignup ? 'Create Account' : 'Login to NagarSetu'}
          </h1>
          {showSignup ? (
            <SignupForm onSwitch={() => setShowSignup(false)} />
          ) : (
            <LoginForm onSwitch={() => setShowSignup(true)} />
          )}
          <div className="my-6">
            <GuestLogin />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}