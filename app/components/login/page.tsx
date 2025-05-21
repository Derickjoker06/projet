"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Exemple de vérification simulée
    if (email === 'admin@example.com' && password === 'admin') {
      router.push('/components/dashbord');
    } else {
      alert("Identifiants incorrects.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 text-center">Connexion</h2>
      <form onSubmit={handleLogin} className="space-y-4 bg-gray-50">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='enter votre email'
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='entrer votre mot_de_passe'
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
