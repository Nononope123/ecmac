"use client"; // Indique que ce composant est un Client Component

import Image from "next/image";
import { Icon } from "@iconify/react";
import HamburgerMenu from "../components/BurgerMenu"; // Assurez-vous que ce chemin est correct
import { Button } from "@/components/ui/button"; // Assurez-vous que ce chemin est correct
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  // Fonction pour vérifier si le lien est actif
  const isActive = (path) => pathname === path;

  // État pour contrôler la visibilité de la barre supérieure au défilement
  const [hideTopBar, setHideTopBar] = useState(false);
  // Nouvel état pour indiquer si le composant est monté côté client
  const [isMounted, setIsMounted] = useState(false);

  // Effet pour gérer le défilement et définir l'état de montage
  useEffect(() => {
    // Dès que le composant est monté côté client, définissez isMounted à true
    setIsMounted(true);

    const handleScroll = () => {
      // Définir hideTopBar en fonction du défilement
      setHideTopBar(window.scrollY > 80);
    };

    // Ajouter l'écouteur d'événement de défilement
    window.addEventListener("scroll", handleScroll);

    // Fonction de nettoyage pour supprimer l'écouteur d'événement
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Le tableau vide [] signifie que cet effet ne s'exécute qu'une fois au montage

  return (
    <header className="w-full">
      {/* Barre du haut - masquée sur les petits écrans */}
      <div
        className={`transition-all duration-300 overflow-hidden bg-[#130159] hidden lg:flex justify-between ${
          // Appliquer la classe de masquage uniquement si le composant est monté ET que hideTopBar est vrai
          isMounted && hideTopBar ? "h-0 opacity-0" : "h-20 opacity-100"
        }`}
      >
        {/* Section Réseaux sociaux */}
        <div className="flex items-center justify-between w-[30%] gap-2 relative">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Forme inclinée pour le design */}
            <div className="absolute top-0 left-[-25px] w-full h-20 bg-[#51be78] skew-x-[30deg] z-10"></div>
            {/* Contenu des réseaux sociaux */}
            <div className="relative z-20 flex items-center gap-3">
              <p className="text-base text-white">Nous suivre :</p>
              <Link href="https://www.facebook.com/ecmac.ga" target="_blank" rel="noopener noreferrer"><Icon className="text-xl text-white" icon="ri:facebook-fill"/></Link>
              <Link href="https://www.instagram.com/ecmacgabon/" target="_blank" rel="noopener noreferrer"><Icon className="text-xl text-white" icon="mingcute:instagram-line" /></Link>
              <Link href="#" target="_blank" rel="noopener noreferrer"><Icon className="text-xl text-white" icon="prime:twitter" /></Link>
              <Link href="#" target="_blank" rel="noopener noreferrer"><Icon className="text-xl text-white" icon="ri:youtube-fill" /></Link>
              <Link href="https://www.linkedin.com/in/ecmac-ecole-communautaire-de-mon%C3%A9tique-17b2a6182/" target="_blank" rel="noopener noreferrer"><Icon className="text-xl text-white" icon="uil:linkedin" /></Link>
            </div>
          </div>
        </div>

        {/* Section Contact */}
        <div className="flex w-[70%] items-center justify-center pl-[100px]">
          {/* Téléphone */}
          <div className="flex items-center gap-3 justify-center px-5">
            <Image src="/phone-call.png" alt="Téléphone" width={32} height={32} />
            <div className="flex flex-col justify-center">
              <p className="text-sm text-white">Appelez-nous !</p>
              <div className="flex flex-wrap gap-1">
                <a href="tel:+24166546874" className="text-sm font-bold text-white hover:text-[#51be78]/80">+241 66 54 68 74 /</a>
                <a href="tel:+24162283188" className="text-sm font-bold text-white hover:text-[#51be78]/80">+241 62 28 31 88</a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 justify-center border-l border-[#33246e] px-5">
            <Image src="/mailing.png" alt="Email" width={32} height={32} />
            <div className="flex flex-col justify-center">
              <p className="text-sm text-white">Envoyez-nous un mail !</p>
              <a
                href="mailto:info@ecmac-gabon.org"
                className="text-sm font-bold text-white hover:text-[#51be78]/80"
              >
                info@ecmac-gabon.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Deuxième barre - navigation principale et bouton */}
      <div className="sticky top-0 w-full bg-white z-50 shadow-md px-3 py-6 flex lg:justify-around items-center transition-all duration-300">
        {/* Logo */}
        <Image src="/Logo-removebg-preview.png" alt="ECMAC" width={120} height={30} />

        {/* Navigation principale */}
        <div className="flex gap-20 items-center">
          {/* Menu Hamburger pour mobile/tablette */}
          <HamburgerMenu />
          {/* Liste de navigation pour les grands écrans */}
          <ul className="hidden font-medium lg:flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-[#130159]">
            {[
              { name: "Accueil", path: "/" },
              { name: "À propos", path: "/about" },
              { name: "Filières", path: "/sector" },
              { name: "Admission", path: "/admission" },
              { name: "Actualités", path: "/actualites" },
              { name: "Galerie", path: "/galerie" },
            ].map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className={`pb-1 relative font-bold cursor-pointer transition-all ease-in-out
                    before:transition-[width] before:ease-in-out before:duration-700 before:absolute
                    before:bg-[#51be78] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%]
                    before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700
                    after:absolute after:bg-[#51be78] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%]
                    after:bottom-0 after:right-[50%] ${
                      isActive(link.path)
                        ? "text-[#51be78] border-b border-[#51be78]" // Style pour le lien actif
                        : "text-[#162542] hover:text-[#51be78]" // Style pour le lien inactif
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Bouton "S'inscrire" */}
          <Link href="/sector">
            <Button className="hidden lg:flex relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-[#130159] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
              <span className="relative z-10 text-white transition-colors duration-500 ease-in-out">
                S'inscrire
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}