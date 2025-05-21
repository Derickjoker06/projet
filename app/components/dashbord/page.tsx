"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Exemple : protection de route si non connecté
    const isAuthenticated = true; // Remplacer par votre logique réelle
    if (!isAuthenticated) {
      router.push('/components/dashbord');
    }
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Statistiques</h2>
          <p className="text-gray-600">Nombre d'utilisateurs, activité, etc.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Dernières actions</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Connexion utilisateur</li>
            <li>Ajout d’un élément</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
