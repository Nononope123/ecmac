import React from 'react';
import { Icon } from "@iconify/react";
import {Button} from "@/components/ui/button";

export function Formulaire() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    const formData = new FormData(event.target); // Récupère toutes les données du formulaire

    // Affiche les données dans la console
    console.log("Données du formulaire soumises :");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // Ici, vous feriez l'envoi des données à votre backend (ex: fetch('/api/submit', { method: 'POST', body: formData }))
    alert('Formulaire soumis ! Vérifiez la console pour les données.');
  };

  return (
    <div >
      <div className="min-h-screen flex items-center justify-center py-12 sm:px-6 ">
      <div className="max-w-4xl w-full  p-3 ">
        <h1 className="text-[#51be78] font-bold text-lg flex gap-3 justify-center mb-5">
                <Icon
                className="w-[30px] text-[#51be78]  h-[30px]"
                icon="icons8:student"
              />{" "}
                Pré-inscription
        </h1>
            <h1 className="mt-2 text-2xl font-extrabold text-[#130159] sm:text-5xl flex justify-center">Lancez votre inscription en ligne.</h1>
            <p className="mt-4 text-md text-gray-500 flex justify-center mb-10">Un processus simple et rapide pour rejoindre notre établissement.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 shadow-xl p-20 rounded-md border bg-[#130159]">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block text-md font-medium text-white">Votre nom</label>
            <div className="mt-1">
              <input
                type="text"
                name="nom"
                id="nom"
                autoComplete="given-name"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                placeholder=""
                required
              />
            </div>
          </div>

          {/* Prénom */}
          <div>
            <label htmlFor="prenom" className="block text-md font-medium text-white">Votre prénom</label>
            <div className="mt-1">
              <input
                type="text"
                name="prenom"
                id="prenom"
                autoComplete="family-name"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder=""
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-md font-medium text-white">Votre email</label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder=""
                required
              />
            </div>
          </div>

          {/* Numéro de téléphone */}
          <div>
            <label htmlFor="telephone" className="block text-md font-medium text-white">Votre numéro de téléphone</label>
            <div className="mt-1">
              <input
                type="tel"
                name="telephone"
                id="telephone"
                autoComplete="tel"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder=""
                required
              />
            </div>
          </div>

          {/* Acte de naissance numérisé */}
          <div>
            <label htmlFor="acteNaissance" className="block text-md font-medium text-white">Acte de naissance numérisé</label>
            <div className="mt-1 flex justify-center px-2 pt-2 pb-2 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-6 text-gray-400" stroke="white" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L40 32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-md text-gray-600">
                  <label htmlFor="acteNaissance" className="relative cursor-pointer  rounded-md font-medium text-white hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Choisir un fichier</span>
                    <input id="acteNaissance" name="acteNaissance" type="file" className="sr-only" accept=".pdf,image/jpeg,image/png" required />
                  </label>
                  <p className="pl-1 text-white">ou glisser-déposer</p>
                </div>
                <p className="text-xs text-white">
                  PDF, JPG, PNG
                </p>
              </div>
            </div>
          </div>

          {/* Bulletins ou attestation de scolarité numérisé */}
          <div>
            <label htmlFor="bulletinScolarite" className="block text-md font-medium text-white">Bulletin de note ou attestation de scolarité numérisé</label>
            <div className="mt-1 flex justify-center px-2 pt-2 pb-2 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-6 text-gray-400" stroke="white" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L40 32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-md text-white">
                  <label htmlFor="bulletinScolarite" className="relative cursor-pointer  rounded-md font-medium text-white hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Choisir un fichier</span>
                    <input id="bulletinScolarite" name="bulletinScolarite" type="file" className="sr-only" accept=".pdf,image/jpeg,image/png" required />
                  </label>
                  <p className="pl-1 text-white">ou glisser-déposer</p>
                </div>
                <p className="text-xs text-white">
                  PDF, JPG, PNG
                </p>
              </div>
            </div>
          </div>

          {/* Établissement de provenance */}
          <div className="md:col-span-2"> {/* Prend toute la largeur sur les écrans md et plus */}
            <label htmlFor="etablissementProvenance" className="block text-md font-medium text-white">Établissement de provenance</label>
            <div className="mt-1">
              <input
                type="text"
                name="etablissementProvenance"
                id="etablissementProvenance"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder=""
                required
              />
            </div>
          </div>

          {/* 2 photos numérisées */}
          <div className="md:col-span-2"> {/* Prend toute la largeur sur les écrans md et plus */}
            <label htmlFor="photos" className="block text-md font-medium text-white">2 photos numérisées</label>
            <div className="mt-1 flex justify-center px-2 pt-2 pb-2 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-6 w-12 text-gray-400" stroke="white" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L40 32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="photos" className="relative cursor-pointer rounded-md font-medium text-white hover:text-gray-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Sélectionner fichiers</span>
                    <input id="photos" name="photos" type="file" multiple className="sr-only" accept="image/jpeg,image/png" required />
                  </label>
                  <p className="pl-1 text-white">ou glisser-déposer</p>
                </div>
                <p className="text-xs text-white">
                  JPG, PNG (2 photos)
                </p>
              </div>
            </div>
          </div>

          {/* Bouton de soumission */}
          <div className="md:col-span-2 mt-4 flex justify-center"> 
           <Button className=" " variant="default">
            <span className="absolute inset-0 w-full h-full bg-[#fff] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
            <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-emerald-600">
              Obtenir une pré-inscription
            </span>
          </Button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}