"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";


const Grid = () => {

 const programFees = [
    {
      title: 'Licence Professionnelle (MSS) et Licence Professionnelle (MTES)',
      fees: [
        { type: 'Inscription/Réinscription', amount: '280 000 FCFA' },
        { type: '1ère année', amount: '1 200 000 FCFA' },
        { type: '2ème année', amount: '1 320 000 FCFA' },
        { type: '3ème année', amount: '1 452 000 FCFA' },
      ],
    },
    {
      title: 'Licence Professionnelle CyberSécurité Monétique et Certification Numérique (LP-CSM-CN)',
      fees: [
        { type: 'Inscription/Réinscription', amount: '280 000 FCFA' },
        { type: '1ère année', amount: '1 400 000 FCFA' },
        { type: '2ème année', amount: '1 555 000 FCFA' },
        { type: '3ème année', amount: '1 666 000 FCFA' },
      ],
    },
    {
      title: 'Master Professionnel Monétique et Transactions Électroniques Sécurisées (MP-MTES)',
      fees: [
        { type: 'Inscription/Réinscription', amount: '280 000 FCFA' },
        { type: 'Master Professionnel 1', amount: '1 900 000 FCFA' },
        { type: 'Master Professionnel 2', amount: '1 999 000 FCFA' },
      ],
    },
  ];

    const firstWaveDates = [
    { date: '26 Août 2024', levels: '1ère Année Licence Professionnelle LP1-MSS-MTES' },
    { date: '27 Août 2024', levels: '2ème Année Licence Professionnelle LP2-MSS-MTES' },
    { date: '28 Août 2024', levels: '3ème Année Licence Professionnelle\nLP3-MSS-MTES' },
    { date: '29 Août 2024', levels: '1ère Année Master Professionnel MP1-MTES' },
  ];


  const secondWaveDates = [
    { date: '2 Septembre 2024', levels: '1ère Année Licence Professionnelle\nLP1-MSS-MTES' },
    { date: '3 Septembre 2024', levels: '2ème Année Licence Professionnelle\nLP2-MSS-MTES' },
    { date: '4 Septembre 2024', levels: '3ème Année Licence Professionnelle\nLP3-MSS-MTES' },
    { date: '5 Septembre 2024', levels: '1ère Année Master Professionnel MP1-MTES' },
  ];


  return (
    <section className="px-8 lg:px-32 flex gap-10 flex-col justify-center items-center py-2 ">
      <div className="container">
        <div className="flex justify-center">
          <div className="flex flex-col ">
            <h1 className="text-[#130159] mt-2 font-bold text-4xl md:text-5xl flex justify-center mb-6">
              Grille de tarifs
            </h1>
          </div>
        </div>
        <div className="container mx-auto">
          {programFees.map((program, programIndex) => (
            <div key={programIndex} className="mb-12 overflow-x-auto">
              <table className="min-w-full bg-white shadow-lg">
                <thead>
                  <tr>
                    <th colSpan="2" className="py-3 px-4 bg-[#130159] text-white text-center font-semibold">
                      {program.title}
                    </th>
                  </tr>
                </thead>
                {/* Correction : Pas d'espaces ou retours à la ligne entre <tbody> et son contenu direct */}
                <tbody>{program.fees.map((item, itemIndex) => (
                    <tr
                      key={itemIndex}
                      className={`
                        ${itemIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                        hover:bg-gray-200 transition-colors duration-200 ease-in-out
                      `}
                    >
                      <td className="py-3 px-4 text-gray-800 border-b border-gray-200 text-left">
                        {item.type}
                      </td>
                      <td className="py-3 px-4 text-gray-800 border-b border-l border-gray-300 text-right">
                        {item.amount}
                      </td>
                    </tr>
                  ))}</tbody>{ /* <-- Ni ici */ }
              </table>
            </div>
          ))}
        </div>
          <div className="flex flex-col mt-10 mb-10">
            <h1 className="text-[#130159] mt-2 font-bold text-4xl md:text-3xl flex justify-center mb-6">
              Calendrier des inscriptions administratives pour l’année académique 2024-2025
            </h1>
            <p className="text-gray-400 flex justify-center mb-2">
                Périodes d’inscriptions
            </p>
            <p className="text-[#51be78] font-bold flex justify-center underline mb-2">
                Première vague
            </p>
            <p className="flex justify-center text-gray-400">
                Juin à Août 2024
            </p>
          </div>
        <div className="container mx-auto">
          {/* Première vague */}
          <div className="mb-12 overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-[#130159] text-white text-left font-semibold">DATES</th>
                  <th className="py-3 px-4 bg-[#130159] text-white text-right font-semibold">NIVEAUX</th>
                </tr>
              </thead>
              {/* Correction : Pas d'espaces ou retours à la ligne entre <tbody> et son contenu direct */}
              <tbody>{firstWaveDates.map((row, index) => (
                  <tr
                    key={index}
                    className={`
                      ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                      hover:bg-gray-200 transition-colors duration-200 ease-in-out
                    `}
                  >
                    <td className="py-2 px-4 w-[80%] text-gray-800 border-b border-gray-200 whitespace-pre-line text-left font-bold">{row.date}</td>
                    <td className="py-2 px-4 text-gray-800 border-b  border-l border-gray-300 whitespace-pre-line text-right">{row.levels}</td>
                  </tr>
                ))}</tbody>{ /* <-- Ni ici */ }
            </table>
          </div>
            <div className="flex flex-col mt-10 mb-5">
            <h1 className="text-[#51be78]  font-bold flex justify-center underline mb-2">
                Deuxième vague
            </h1>
            <p className="text-gray-400 flex justify-center">
                Du 1er au 16 Septembre 2024
            </p>
          </div>
          <div className="mb-12 overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="py-2  px-4 bg-[#130159] text-white text-left font-semibold">DATES</th>
                  <th className="py-2 px-4 bg-[#130159] text-white text-right font-semibold">NIVEAUX</th>
                </tr>
              </thead>
              {/* Correction : Pas d'espaces ou retours à la ligne entre <tbody> et son contenu direct */}
              <tbody>{secondWaveDates.map((row, index) => (
                  <tr
                    key={index}
                    className={`
                      ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                      hover:bg-gray-200 transition-colors duration-200 ease-in-out
                    `}
                  >
                    <td className="py-3 w-[80%] px-4 text-gray-800 border-b border-gray-200 whitespace-pre-line text-left font-bold">{row.date}</td>
                    <td className="py-3 px-4 text-gray-800 border-b  border-l border-gray-300 whitespace-pre-line text-right">{row.levels}</td>
                  </tr>
                ))}</tbody>{ /* <-- Ni ici */ }
            </table>
          </div>
        </div>
      </div>

      <motion.div
        className="bg-cover md:w-[80%] justify-center rounded-md bg-center"
        style={{
          backgroundImage: "url('/bg.png')",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-black flex flex-col p-5 md:p-10 rounded-md gap-8 bg-opacity-25 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col gap-2 xl:w-[50%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-white font-bold text-3xl">
              Frais d&apos;inscription à toutes les licences Pro et Master Pro :
              280.000 FCFA
            </h1>
            <h1 className="text-white text-base">
              Pour toutes questions concernant votre inscription, nous vous
              invitons à contacter le service des admissions.
            </h1>
          </motion.div>
          <motion.div
            className="flex flex-col lg:flex-row gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="mailto:admissions@exemple.com"
              className="px-6 py-3 flex justify-center items-center gap-2 text-[#419b60] bg-white hover:bg-white/80 rounded-md shadow-lg transition-colors duration-300"
            >
              <Icon className="text-xl" icon="line-md:email-twotone" />
              Envoyer un e-mail
            </a>
            <a
              href="tel:+1234567890"
              className="px-6 flex justify-center items-center gap-2 py-3 text-white bg-[#120158] hover:bg-[#0e013e] rounded-md shadow-lg transition-colors duration-300"
            >
              <Icon className="text-xl" icon="line-md:phone-call-loop" />
              Appeler Maintenant
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Grid;