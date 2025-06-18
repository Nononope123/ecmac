"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/slide1.jpeg",
      title: "Bienvenue sur le site officiel de l'ECMAC",
      description:
        "1ère école d'Afrique Centrale, spécialisée dans les métiers de la Monétique & TES.",
      text1: "Plus d'informations",
      action: () => alert("Learn More clicked!"),
      text2: "Nous contactez",
      action: () => alert("Get Started clicked!"),
    },
    {
      id: 2,
      image: "/slide2.jpeg",
      title: "Des formations pour façonner votre futur",
      description:
        "Réalisez vos ambitions grâce à nos programmes innovants et adaptés à vos besoins.",
      text1: "Plus d'informations",
      action: () => alert("Discover clicked!"),
      text2: "Nous contacter",
      action: () => alert("Join Now clicked!"),
    },
    {
      id: 3,
      image: "/slide3.jpeg",
      title: "Restez informé avec nos actualités",
      description:
        "Consultez les dernières nouvelles, événements et opportunités dans le monde de la Monétique.",
      text1: "Plus d'informations",
      action: () => alert("Learn More clicked!"),
      text2: "Nous contacter",
      action: () => alert("Sign Up clicked!"),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen md:h-[500px] bg-gray-900 text-white overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image de fond */}
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full "
          />

          {/* Contenu textuel avec animation */}
          {index === currentSlide && (
            <div className="absolute px-5 md:px-16 inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
              <motion.h1
                className="text-3xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-lg mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {slide.description}
              </motion.p>
              <div className="flex gap-5">
                <motion.button
                  onClick={slide.action}
                  className="relative shadow-md text-lg text-white px-1 py-2  md:px-5 md:py-4 rounded-md inline-flex items-center justify-center border hover:border-[#130159] border-[#51be78] bg-[#51be78] animate-shimmer bg-[linear-gradient(110deg,#51be78,45%,#65e090,55%,#51be78)] bg-[length:200%_100%] font-medium transition-all duration-400 ease-out overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + slide.id * 0.5,
                    type: "spring",
                  }}
                >
                  <span className="absolute inset-0 w-full h-full bg-[#130159] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                  <span className="relative mr-3 z-10 transition-colors duration-500 ease-in-out group-hover:text-[#ffffff]">
                    {slide.text1}
                  </span>
                  <Icon
                    className="z-10 text-white"
                    icon="solar:arrow-right-line-duotone"
                  />
                </motion.button>
                <motion.button
                  onClick={slide.action}
                  className="relative shadow-md text-lg text-white px-1 py-2 md:px-5 md:py-4 rounded-md inline-flex items-center justify-center border hover:border-[#130159] border-[#fff] animate-shimmer bg-[linear-gradient(110deg,transparent,45%,#fefefe,55%,transparent)] bg-[length:200%_100%] font-medium transition-all duration-400 ease-out overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + slide.id * 0.5,
                    type: "spring",
                  }}
                >
                  <span className="absolute inset-0 w-full h-full bg-[#130159] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                  <span className="relative z-10 mr-3 transition-colors duration-500 ease-in-out group-hover:text-[#ffffff]">
                    {slide.text2}
                  </span>
                  <Icon
                    className="z-10 text-white"
                    icon="solar:arrow-right-line-duotone"
                  />
                </motion.button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute hidden md:flex left-5 top-1/2 transform -translate-y-1/2 bg-white text-[#130159] hover:text-white rounded-full py-3 px-4 hover:bg-[#51be78]"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute hidden md:flex right-5 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#51be78] text-[#130159] hover:text-white rounded-full px-4 py-3"
      >
        &#9654;
      </button>
    </div>
  );
};

export default HeroCarousel;
