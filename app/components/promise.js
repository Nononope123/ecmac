import { Icon } from "@iconify/react";

const blockData = [
  {
    id: 1,
    title: "Licence Professionnelle",
    description:
      "ECMAC propose des Licences Professionnelles conçues pour offrir une formation de qualité et préparer les étudiants à exceller dans leur domaine.",
    icon: "flat-color-icons:diploma-2",
    link: "/sector",
    linkText: "Lire plus",
  },
  {
    id: 2,
    title: "Master Professionnel",
    description:
      "ECMAC dispense des Masters Professionnels visant à approfondir vos compétences et à vous positionner comme un expert dans votre spécialité.",
    icon: "flat-color-icons:diploma-1",
    link: "/sector",
    linkText: "Lire plus",
  },
  {
    id: 3,
    title: "Inscription",
    description:
      "Les inscriptions sont ouvertes pour les étudiants souhaitant se spécialiser dans les métiers innovants de la monétique et des transactions électroniques sécurisées.",
    icon: "emojione-v1:pen-over-stamped-envelope",
    link: "/admission",
    linkText: "Lire plus",
  },
];

export default function Promise() {
  return (
    <div className=" px-8 lg:px-32 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blockData.map((block) => (
        <div
          key={block.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-6 flex flex-col items-center">
            <div className="mb-4">
              <Icon icon={block.icon} className="w-[80px]  h-[80px]" />
             
            </div>
            <h5 className="text-xl font-semibold text-gray-800 mb-3">
              <a
                href={block.link}
                className="hover:text-green-600 transition-colors"
              >
                {block.title}
              </a>
            </h5>
            <p className="text-gray-600 text-[15px] text-center mb-4">
              {block.description}
            </p>
            <a
              href={block.link}
              className="text-green-600 hover:underline gap-2 flex items-center"
            >
              {block.linkText}
              <Icon
                className=" text-green-600"
                icon="solar:arrow-right-line-duotone"
              />
            </a>
          </div>
        </div>
        
      ))}
    </div>
  );
}
