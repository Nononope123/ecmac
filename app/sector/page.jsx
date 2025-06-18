"use client"

import React from 'react'
import Formations from '../components/formation'
import { motion } from "framer-motion";

function page() {
  return (
    <div>
            <motion.section
            className="flex items-center bg-cover bg-center"
            style={{backgroundImage: 'url("/about.jpg")', height: "400px" }}
            >
            <div className="flex justify-center items-center bg-black w-full h-full bg-opacity-55">
                <motion.div
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{delay: 0.5, duration: 0.8}}>
                    <h2 className="text-white text-5xl md:text-6xl font-bold flex justify-center">
                        Filières
                    </h2>
                    <p className="text-white sm:text-sm md:text-lg mt-4 md:pl-20 text-center px-5">
                        Explorez nos différentes filières et trouvez celle qui correspond à vos ambitions.
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
                    <li className="px-2 border-l text-white">Filières</li>
                </ol>
            </motion.div>
        <Formations />
    </div>
  )
}

export default page