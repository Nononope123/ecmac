import React from 'react'
import {motion} from "framer-motion"
import { Icon } from "@iconify/react";

function Procedure() {
  return (
    <motion.section
    className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center p-20 w-50">
            <h3 className="font-bold text-[#51be78] mb-2 text-xl">
                Procédure d&apos;Admission à l&apos;ECMAC
            </h3>
            <p className="text-gray-600 text-justify mb-10">
                L&apos;Ecole Communautaire de Monétique d&apos;Afrique Centrale délivre trois diplômes de Licence Professionnelle de niveau Bac+3 accrédités<br/>
                 par la commission des titres du Ministère de l&apos;Enseignement Supérieur, de la Recherche Scientifique, et de l&apos;Innovation Technologique.<br/>
            </p>
            <h3 className="font-bold text-[#51be78] mb-5 underline underline-offset-4">
                Prérequis d&apos;admission :
            </h3>
            <h2 className="text-[#130159] text-md font-bold mb-2">
                1ère Etape
            </h2>

            <ul className="">
                <li className="list-disc font-bold mb-1 text-[#130159]">
                Admission en 1ère Année de Licence Professionnelle en Monétique et Sécurité des Systèmes (LP1-MMS) :
                </li>
                <li className="text-gray-600">
                Être titulaire d'un Bac A1, B, C, D, F2, F3, etc.
                </li>
                <li className="list-disc font-bold mb-1 text-[#130159]">
                Admission en 1ère Année de Licence Professionnelle en Monétique et Transactions Electroniques Sécurisées (LP1-MTES) :
                </li>
                <li className="text-gray-600">
                Être titulaire d'un Bac A1, B, C, D, F2, F3, etc.
                </li>
                <li className="list-disc font-bold mb-1 text-[#130159]">
                Admission en 1ère Année de Licence Professionnelle en Cybersécurité Monétique et Certification Numérique (CSM-CN) :
                </li>
                <li className="text-gray-600">
                Être titulaire d'un Bac C ou D
                </li>
                <li className="list-disc font-bold mb-1 text-[#130159]">
                Admission en Master Professionnelle 1 (*) en Monétique et Transactions Electroniques (MP1-MTES) :
                </li>
                <li className="text-gray-600 mb-5">
                Être titulaire d'un Diplôme de Licence Professionnelle en Monétique, Informatique, Réseaux et Télécoms .
                </li>
                <li className="text-gray-600 mb-10">
                (*) Le Master Professionnel Monétique et Transactions Electroniques Sécurisées s’effectue sur une durée de 2 ans, Master Pro 1 et 2.
                </li>
            </ul>

            <h2 className="text-[#130159] text-md font-bold mb-1">
                2ème Etape
            </h2>
            <h3 className="font-bold mb-1 text-[#130159]">
                Constitution des dossiers de candidature :
            </h3>
                <ol className="text-gray-600">
                    <li className="flex gap-1">
                        <Icon icon="ic:baseline-check" width="20" height="20"   className="text-[#51be78]"/>
                        Acte de naissance légalisé</li>
                    <li className="flex gap-1">
                                                <Icon icon="ic:baseline-check" width="20" height="20"   className="text-[#51be78]"/>
                        Attestation de réussite au Bac</li>
                    <li className="flex gap-1">
                        <Icon icon="ic:baseline-check" width="20" height="20"   className="text-[#51be78]"/>
                        3 bulletins de la classe de terminale</li>
                    <li className="flex gap-1">
                        <Icon icon="ic:baseline-check" width="20" height="20"   className="text-[#51be78]"/>
                        Un certificat médical</li>
                    <li className="flex gap-1">
                        <Icon icon="ic:baseline-check" width="20" height="20"   className="text-[#51be78]"/>
                        Deux photos d’identité.</li>
                    <li className="flex gap-1">
                        <Icon icon="ic:baseline-check" width="20" height="20"   className="text-[#51be78]"/>
                        Lettre de motivation adressée au Président Fondateur de l’ECMAC</li>
                    <li className="flex gap-1">
                        <Icon icon="ic:baseline-check" width="20" height="20"   className="text-[#51be78]"/>
                        Relevé de note du bac</li>
                </ol>
            <br/>
             <h3 className="font-bold mb-1 text-[#130159]">
                Inscription
            </h3>
            <p className="text-gray-600 text-justify">
                Veuillez contacter le service de la scolarité pour avoir toutes les informations nécessaires à la procédure d’inscription et sur les filières <br/>
                de formation choisies.
            </p> <br/>

            <h3 className="font-bold mb-1 text-[#130159]">
                Contact du service de la scolarité
            </h3>
            <ol className="text-gray-600 mb-3">
                <li className="mb-1">Mlle Alexia DAMBASSA</li>
                <li className="">Tél : +241 (0)66 54 68 74</li>
            </ol>

        </div>
    </motion.section>
  )
}

export default Procedure