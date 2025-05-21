"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Exemple d'enregistrement simulé
    console.log({ username, email, password });

    // Redirection vers la page de connexion après l'inscription
    router.push('/components/dashbord')
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-blue-300 rounded-xl shadow-md space-y-4 mt-10">
      <h2 className="text-xl font-semibold text-gray-700 text-center">inscription</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Nom d'utilisateur
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm"
          />
        </div>
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
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            confirmation du Mot de passe
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
