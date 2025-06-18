"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { TimelineDemo } from "../components/timeline";
import { motion } from "framer-motion";

export default function About() {
  const teamMembers = [
    {
      name: "M. Émile KOMBILA",
      role: "Président Fondateur",
      description: "Administrateur, Directeur Général",
      image: "/emile4.jpg",
    },
    {
      name: "M. Guy-Serge BIGNOUMBA",
      role: "Directeur des Etudes",
      image: "/guy 2.png",
    },
    {
      name: "Mme. Alexia DAMBASSA",
      role: "Responsable de la Scolarité",
      image: "/alex.jpeg",
    },
  ];

  return (
    <main>
      <>
        {/* Breadcrumb Area */}
        <motion.section
          className="flex flex-col items-center bg-cover bg-center"
          style={{ backgroundImage: 'url("/about.jpg")', height: "400px" }}
          // initial={{ opacity: 0, y: -50 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center bg-black w-full h-full bg-opacity-55">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className="text-white text-4xl md:text-6xl font-bold flex justify-center">
                À propos de nous
              </h2>
              <p className="text-white sm:text-sm md:text-lg mt-4 pl-1 text-center px-5">
                Apprenez en plus sur notre histoire, nos valeurs et nos missions.
              </p>
            </motion.div>
          </div>
        </motion.section>
        <motion.div
          className="text-white -mt-[30px] flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <ol className="flex p-5 bg-[#21c45d] rounded-full">
            <li className="px-2">
              <a href="/" className="text-white font-bold hover:text-blue-500">
                Accueil
              </a>
            </li>
            <li className="px-2 border-l text-white">À propos de nous</li>
          </ol>
        </motion.div>

        {/* About Section */}
        <motion.section
          className="bg-blue-50 -mt-[30px] px-8 lg:px-24 pt-20 pb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto grid md:grid-cols-3 gap-10">
            <motion.div
              className="col-span-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/etudiants.jpg"
                alt="ECMAC"
                width={1000}
                height={1000}
                className="rounded-lg w-full shadow-md"
              />
            </motion.div>
            <motion.div
              className="col-span-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Icon
                  className="w-[30px] text-[#51be78] h-[30px]"
                  icon="material-symbols:roundabout-left"
                />{" "}
                <h2 className="text-[#51be78] font-bold text-lg">
                  À propos de l'ECMAC
                </h2>
              </div>
              <h1 className="text-[#130159] mt-2 font-bold text-4xl md:text-5xl mb-5">
                L&apos;ECMAC a 5 ans !
              </h1>
              <p className="text-gray-700 mb-2">
                5 ans qu&apos;on parle Monétique et Transactions Électroniques
                Sécurisées.
              </p>
              <p className="text-gray-700 mb-2">
                5 ans qu&apos;on parle de systèmes de paiements sécurisés.
              </p>
              <p className="text-gray-700 mb-2">
                5 ans qu&apos;on parle de Cryptographie Asymétrique à
                l&apos;ECMAC.
              </p>
              <p className="text-gray-700">
                Une aventure et une expérience passionnante avec les ECMACIENNES
                et ECMACIENS qui forment la communauté des Monéticiens de
                l&apos;ECMAC.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </>
      <TimelineDemo />
      {/* Team Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="flex items-center gap-2">
            <Icon
              className="w-[30px] text-[#51be78] h-[30px]"
              icon="fa6-solid:people-group"
            />{" "}
            <h2 className="text-[#51be78] font-bold text-lg">
              ÉQUIPE DIRIGEANTE
            </h2>
          </div>
          <h1 className="text-[#130159] mt-2 mb-10 font-bold text-2xl md:text-4xl">
            Équipe Dirigeante ECMAC
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={1000}
                  height={1000}
                  className="rounded-full mx-auto w-[250px] md:w-[300px] shadow-md"
                />
                <h3 className="text-gray-800 text-xl font-bold mt-4">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
