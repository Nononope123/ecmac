import { Icon } from "@iconify/react";
import Image from "next/image";

const filiere = [
  {
    id: 1,
    category: "Licences",
    title:
      "Licence Professionnelle Monétique et Sécurité des Systèmes (LP-MSS)",
    description:
      "La Licence Professionnelle Monétique et Sécurité des Systèmes forme des étudiants capables de gérer l’environnement de sécurité des automates bancaires, déployer un serveur Front-Office et Back-Office Monétique...",
    imgSrc: "/fil1.jpeg",
    detailsLink: "/sector",
  },
  {
    id: 2,
    category: "Masters",
    title: "Master en Cyber Sécurité et Réseaux Avancés (MCSRA)",
    description:
      "Ce programme vise à développer des compétences avancées en cybersécurité et en administration des réseaux modernes...",
    imgSrc: "/fil2.webp",
    detailsLink: "/sector",
  },
  {
    id: 3,
    category: "Certifications",
    title: "Certification en Développement Web Moderne",
    description:
      "Un programme court conçu pour maîtriser les dernières technologies de développement web, telles que React et Node.js.",
    imgSrc: "/fil3.jpeg",
    detailsLink: "/sector",
  },
  {
    id: 4,
    category: "Licences",
    title: "Licence en Gestion et Systèmes d’Information (LGSI)",
    description:
      "Cette formation forme des experts en gestion des systèmes d’information, combinant informatique et management.",
    imgSrc: "/fil6.jpeg",
    detailsLink: "/sector",
  },
  {
    id: 5,
    category: "Masters",
    title: "Master en Intelligence Artificielle Appliquée (MIAA)",
    description:
      "Un programme innovant axé sur l’application de l’intelligence artificielle dans divers secteurs industriels.",
    imgSrc: "/fil5.jpeg",
    detailsLink: "/sector",
  },
];

export default function Filiere() {
  return (
    <div className="px-8 lg:px-32 py-10">
      <div className="flex items-center gap-2">
        <Icon
          className="w-[30px] text-[#51be78]  h-[30px]"
          icon="icons8:student"
        />{" "}
        <h2 className="text-[#51be78] font-bold text-lg">
          Toutes nos filières
        </h2>
      </div>
      <h1 className="text-[#130159] mt-2 font-bold text-4xl md:text-5xl">
        Nos filières Professionnelles
      </h1>
      <div className="grid grid-cols-1 justify-center mt-10 md:grid-cols-2 gap-20">
        {filiere.map((course) => (
          <div key={course.id} className="w-full ">
            <div className="">
              <div className="overflow-hidden rounded-lg">
                <a href={course.detailsLink} className="block">
                  <Image
                    src={course.imgSrc}
                    alt={course.title}
                    width={400}
                    height={300}
                    className="transform w-full h-full transition-transform duration-300 hover:scale-110 object-cover"
                  />
                </a>
              </div>

              <div className=" bg-white p-4 shadow hover:bg-blue-100 rounded-b-lg">
                <button className="flex mt-[-40px] bg-[#51be78] z-10 relative px-2 rounded py-1  items-center gap-2 text-white font-medium mb-2">
                  <Icon
                    className="w-[25px] text-white  h-[25px]"
                    icon="icons8:student"
                  />{" "}
                  {course.category}
                </button>
                <h5 className="text-lg font-bold text-gray-800 mb-2">
                  <a href={course.detailsLink} className="hover:text-green-600">
                    {course.title}
                  </a>
                </h5>
                <p className="text-gray-600 text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={course.detailsLink}
                    className="text-green-600 hover:underline flex items-center"
                  >
                    Voir plus{" "}
                    <Icon
                      className=" text-green-600"
                      icon="solar:arrow-right-line-duotone"
                    />
                  </a>
                  <Icon
                    icon="emojione-monotone:open-book"
                    width="64"
                    height="64"
                    className="text-blue-600/25"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
