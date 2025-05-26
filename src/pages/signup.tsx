// src/pages/Signup.tsx
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert('Check your email to confirm your signup!');
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

        <input
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="bg-tea-600 hover:bg-tea-700 text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
