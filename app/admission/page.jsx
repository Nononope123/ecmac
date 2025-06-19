"use client"

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Procedure from "../components/procedure"
import Grid from "../components/grid"
import { Formulaire } from "../components/formulaire";
import Banner from "../components/Banner";

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
                <Banner/>
                <Procedure/>
                <Grid/>
                <Formulaire/>
        </main>
    )
}