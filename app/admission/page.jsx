"use client"

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Procedure from "../components/procedure"
import Grid from "../components/grid"
import { Formulaire } from "../components/formulaire";

export default function Sector() {
    return(
        <main>
            {/*Breadcrumb Area*/}
            <motion.section
            className="flex items-center bg-cover bg-center"
            style={{backgroundImage: 'url("/slide2.jpeg")', height: "400px" }}
            >
            <div className="flex justify-center items-center bg-black w-full h-full bg-opacity-55 ">
                <motion.div
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{delay: 0.5, duration: 0.8}}>
                    <h2 className="text-white text-5xl md:text-6xl font-bold flex justify-center">
                        Admission
                    </h2>
                    <p className="text-white sm:text-sm md:text-lg mt-2 md:pl-20 flex text-center px-5">
                        Retrouvez les étapes et procédures nécessaires pour votre admission.
                    </p>
                     </motion.div>
                    </div>
            </motion.section>
            <motion.div
            className="text-white -mt-[30px] flex items-center justify-center"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay:0.8, duration: 0/8}}>
                <ol className="flex p-5 bg-[#21c45d] rounded-full">
                    <li className="px-2">
                        <a href="/" className="text-white font-bold hover:text-blue-500">
                            Accueil
                        </a>
                    </li>
                    <li className="px-2 border-l text-white">Admission</li>
                </ol>
            </motion.div>

            {/*Admission Section */}
                <motion.div
                  className="banner1 relative bg-cover bg-center mt-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <video
                    className="absolute opacity-20  bg-cover bg-center top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/ecmac.mp4" type="video/mp4" />
                   
                  </video>
                  <div className="overlay bg-[white] bg-opacity-50 flex flex-col items-center justify-center text-center p-6 md:p-10 h-full">
                    <motion.h1
                      className="text-[#130159] text-4xl font-bold mb-4"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                    Attention!
                    </motion.h1>
                    <motion.p
                    className="text-[#130159] text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    >
                        Le 16 septembre, rentrée académique pour tous les étudiants d'ECMAC. <br/>
                        Une séance de photo est prévue à 10h pour l&apos;établissement de votre carte d'&apos;étudiant.
                    </motion.p>
                    <div className="mt-6">
                      <motion.button
                        href="/actualites"
                        className="relative shadow-md text-lg text-white px-1 py-2  md:px-5 md:py-4 rounded-md inline-flex items-center justify-center border hover:border-[#130159] border-[#51be78] bg-[#51be78] animate-shimmer bg-[linear-gradient(110deg,#51be78,45%,#65e090,55%,#51be78)] bg-[length:200%_100%] font-medium transition-all duration-400 ease-out overflow-hidden group"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <span className="absolute inset-0 w-full h-full bg-[#130159] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                        <span className="relative mr-3 z-10 transition-colors duration-500 ease-in-out group-hover:text-[#ffffff]">
                          Voir le fil d&apos;actualité
                        </span>
                        <Icon
                          className="z-10 text-white"
                          icon="solar:arrow-right-line-duotone"
                        />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
                <Procedure/>
                <Grid/>
                <Formulaire/>
        </main>
    )
}