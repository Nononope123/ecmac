"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Clock, Users, ArrowRight, MapPin, BookOpen, Trophy, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";

// Hook pour détecter les clics en dehors d'un élément
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

// Icône de fermeture
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const formations = [
  {
    id: 1,
    titre: "Licence Professionnelle Monétique et Sécurité des Systèmes (LP-MSS)",
    description: "La Licence Professionnelle Monétique et Sécurité des Systèmes forme des étudiants capables de gérer l’environnement de sécurité des automates bancaires, Administrer un serveur FO ou BO, configurer un GAB ou un TPE (Terminale de Paiement Electronique),appliquer une méthodologie, appliquer des procédures, s’intégrer dans une équipe projet.",
    duree: "3 ans",
    niveau: "Bac+3",
    effectif: "25 étudiants",
    badges: ["Bac+3", "Sécurité"],
    prerequis: "Etre titulaire d’un Bac série A1, B, C, D, F2, F3, etc.",
    image: "/fil3.jpeg",
    objectifs: [
      "Identifier les failles de sécurité sur les systèmes et proposer des solutions",
      "Utiliser les mécanismes cryptographiques avancés",
      "Rédiger des cahiers des charges et de faisabilité",
      "Définir des applications cartes bancaires et personneliser des cartes bancaires"
    ],
    debouches: [
      "Spécialiste en systèmes de paiement",
      "Consultant en sécurité monétique",
      "Gestionnaire de systèmes bancaires",
      "Expert en transactions électroniques"
    ],
    matieres: [
      "Systèmes de paiement",
      "Sécurité informatique",
      "Cryptographie",
      "Réglementation bancaire",
      "Technologies financières",
      "Gestion des risques"
    ]
  },
  {
    id: 2,
    titre: "Licence Professionnelle Monétique et Transactions Électroniques Sécurisées (LP-MTES)",
    description: "La Licence Professionnelle Monétique et Transactions Electroniques Sécurisées forme des étudiants experts junior en monétique et sécurité des transactions, capables d’avoir une bonne maîtrise des projets AMOA Monétique dans le cadre du déploiement des nouvelles solutions monétiques au niveau des banques d’Afrique centrale.",
    duree: "3 ans",
    niveau: "Bac+3",
    effectif: "25 étudiants",
    badges: ["Bac+3", "Transactions"],
    prerequis: "Etre titulaire d’un Bac série A1, B, C, D, F2, F3, etc.",
    image: "/fil2.webp",
    objectifs: [
      "Connaissances des méthodes de gestion de projet dans le domaine monétique et gestion de la fraude.",
      "Maitrise de l’écosystème réglementaire PCI DSS, EMV, ISO8583,",
      "Intégration des projets relatifs à l’activité monétique",
      "La maîtrise des progiciels monétique du marché."
    ],
    debouches: [
      "Développeur de solutions de paiement",
      "Architecte de sécurité",
      "Gestionnaire de plateformes e-commerce",
      "Consultant en transformation digitale"
    ],
    matieres: [
      "Transactions électroniques",
      "Sécurité des données",
      "Développement web sécurisé",
      "Architecture système",
      "Audit de sécurité",
      "Conformité réglementaire"
    ]
  },
  {
    id: 3,
    titre: "Licence Professionnelle Cybersécurité Monétique et Certification Numérique (LP-CSM-CN)",
    description: "La Licence Professionnelle CyberSécurité Monétique et Certification Numérique forme des étudiants experts en Cybersécurité Monétique, spécialisés en investigation informatique expertale en Cybercriminalité Financière.",
    duree: "3 ans",
    niveau: "Bac+3",
    effectif: "25 étudiants",
    badges: ["Bac+3", "Cybersécurité"],
    prerequis: "Etre titulaire d’un Bac série  C ou D",
    image: "/cybersecurite.jpeg",
    objectifs: [
      "Surveiller l’infrastructure Monétique pour identifier et bloquer des activités inhabituelles ou suspectes",
      "Protéger les systèmes d’information monétique de la banque",
      "Assurer une veille technologique et règlementaire.",
      "Effectuer des audits monétiques réguliers "
    ],
    debouches: [
      "Expert en cybersécurité",
      "Auditeur sécurité",
      "Responsable certification",
      "Consultant en sécurité numérique"
    ],
    matieres: [
      "Cybersécurité avancée",
      "Certification numérique",
      "Audit de sécurité",
      "Gestion des incidents",
      "Forensique numérique",
      "Conformité et réglementation"
    ]
  },
  {
    id: 4,
    titre: "Master Professionnel Monétique et Sécurité des Systèmes (MP-MSS)",
    description: "Le Master Professionnelle Monétique et Sécurité des Systèmes forme des étudiants capables de gérer l’environnement de sécurité des automates bancaires, déployer un serveur Front-Office et Back-Office Monétique, Administrer un serveur FO ou BO, configurer un GAB ou un TPE (Terminale de Paiement Electronique), rédiger des cahiers de recettes.",
    duree: "5 ans",
    niveau: "Bac+5",
    effectif: "25 étudiants",
    badges: ["Bac+5", "Expertise"],
    prerequis: "Etre titulaire d’un Bac série A1, B, C, D, F2, F3, etc.",
    image: "/fil3.jpeg",
    objectifs: [
      "Identifier les failles de sécurité sur les systèmes et proposer des solutions sécuritaires",
      "Diriger des projets de sécurité",
      "Concevoir des architectures sécurisées",
      "Manager des équipes techniques"
    ],
    debouches: [
      "Directeur technique",
      "Architecte en chef",
      "Consultant senior",
      "Chef de projet sécurité"
    ],
    matieres: [
      "Architecture système avancée",
      "Management de projet",
      "Recherche et développement",
      "Innovation technologique",
      "Leadership technique",
      "Stratégie d'entreprise"
    ]
  },
  {
    id: 5,
    titre: "Master Professionnel Monétique et Transactions Électroniques Sécurisées (MP-MTES)",
    description: "Le Master Professionnel Monétique et Transactions Electroniques Sécurisées forme des étudiants experts junior en monétique et sécurité des transactions, capables d’avoir une bonne maîtrise des projets AMOA Monétique dans le cadre du déploiement des nouvelles solutions monétiques au niveau des banques d’Afrique centrale.",
    duree: "2 ans",
    niveau: "Bac+5",
    effectif: "25 étudiants",
    badges: ["Bac+5", "Innovation"],
    prerequis: "Etre titulaire d’un Diplôme de Licence Professionnelle en Monétique, Informatique, Réseaux et Télécoms.",
    image: "/fil2.webp",
    objectifs: [
      "Innover en matière de paiements",
      "Développer des solutions fintech",
      "Diriger la transformation digitale",
      "Rechercher de nouvelles technologies"
    ],
    debouches: [
      "Directeur innovation",
      "CTO fintech",
      "Consultant stratégique",
      "Entrepreneur tech"
    ],
    matieres: [
      "Innovation fintech",
      "Blockchain et cryptomonnaies",
      "Intelligence artificielle",
      "Big data financier",
      "Stratégie numérique",
      "Entrepreneuriat tech"
    ]
  },
  {
    id: 6,
    titre: "Master Professionnel Cybersécurité Monétique et Certification Numérique (MP-CSM-CN)",
    description: "Le Master Professionnel CyberSécurité Monétique et Certification Numérique forme des étudiants experts en Cybersécurité Monétique, spécialisés en investigation informatique expertale en Cybercriminalité Financière.",
    duree: "5 ans",
    niveau: "Bac+5",
    effectif: "25 étudiants",
    badges: ["Bac+5", "Expert"],
    prerequis: "Etre titulaire d’un Bac série A1, B, C, D, F2, F3, etc.",
    image: "/cybersecurite.jpeg",
    objectifs: [
      "Surveiller l’infrastructure Monétique ",
      "Effectuer des audits monétiques réguliers",
      "Assurer une veille technologique et règlementaire",
      "Protéger les systèmes d’information monétique de la banque"
    ],
    debouches: [
      "CISO (Chief Information Security Officer)",
      "Directeur cybersécurité",
      "Expert judiciaire",
      "Consultant international"
    ],
  }
];

// Composant principal qui gère l'affichage des formations et de la modal
const Formations = () => {
  // `selectedFormation` gère la formation dont les détails sont affichés dans la colonne de droite sur desktop.
  // `activeFormation` gère la formation affichée dans la modal full-screen sur mobile.
  const [selectedFormation, setSelectedFormation] = useState(formations[0]);
  const [activeFormation, setActiveFormation] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveFormation(null);
      }
    }

    if (activeFormation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeFormation]);

  useOutsideClick(ref, () => setActiveFormation(null));

  // Fonction pour afficher les détails soit dans la modal (mobile), soit dans la colonne (desktop)
  const handleCardClick = (formation) => {
    // Détecte la taille de l'écran pour choisir l'affichage
    if (window.innerWidth < 1024) { // Par exemple, 1024px pour la breakpoint 'lg' de Tailwind
      setActiveFormation(formation); // Ouvre la modal sur mobile
    } else {
      setSelectedFormation(formation); // Met à jour la colonne de droite sur desktop
    }
  };

  return (
    <div className="min-h-screen">
      {/* Modal pour les détails de la formation (active uniquement sur mobile) */}
      <AnimatePresence>
        {activeFormation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 lg:hidden" // Caché sur les grands écrans
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeFormation ? (
          <div className="fixed inset-0 grid place-items-center z-[100] lg:hidden"> {/* Caché sur les grands écrans */}
            <motion.button
              key={`button-close-${activeFormation.id}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 z-20 shadow-md"
              onClick={() => setActiveFormation(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${activeFormation.id}-${id}`}
              ref={ref}
              className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Image de la formation agrandie */}
              <motion.div layoutId={`image-${activeFormation.id}-${id}`}>
                <img
                  src={activeFormation.image}
                  alt={activeFormation.titre}
                  width={700}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-t-lg"
                />
              </motion.div>

              {/* Contenu détaillé de la formation */}
              <div className="p-6 flex-grow overflow-y-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeFormation.badges.map((badge) => (
                    <Badge key={badge} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <motion.h3
                  layoutId={`title-${activeFormation.id}-${id}`}
                  className="font-bold text-2xl text-[#130159] mb-2"
                >
                  {activeFormation.titre}
                </motion.h3>
                <motion.p
                  layoutId={`description-${activeFormation.id}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-lg mb-4"
                >
                  {activeFormation.description}
                </motion.p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                  <div className="flex flex-col items-center">
                    <Clock className="w-6 h-6 text-[#21c45d] mb-1" />
                    <p className="font-medium text-[#130159]">Durée</p>
                    <p className="text-sm text-muted-foreground">{activeFormation.duree}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Users className="w-6 h-6 text-[#21c45d] mb-1" />
                    <p className="font-medium text-[#130159]">Effectif</p>
                    <p className="text-sm text-muted-foreground">{activeFormation.effectif}</p>
                  </div>
                </div>

                <Tabs defaultValue="objectifs" className="w-full mt-4">
                  <TabsList className="grid w-full grid-cols-2 text-[#130159]">
                    <TabsTrigger value="objectifs">Objectifs</TabsTrigger>
                    <TabsTrigger value="debouches">Débouchés</TabsTrigger>
                  </TabsList>

                  <TabsContent value="objectifs" className="mt-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-[#130159]" />
                        Objectifs de la formation
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {activeFormation.objectifs.map((objectif, index) => (
                          <li key={index}>{objectif}</li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="debouches" className="mt-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center text-[#130159]">
                        <Briefcase className="w-5 h-5 mr-2 text-[#21c45d]" />
                        Débouchés professionnels
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {activeFormation.debouches.map((debouche, index) => (
                          <Card key={index} className="p-4">
                            <div className="flex items-center space-x-2">
                              <Briefcase className="w-4 h-4 text-[#130159]" />
                              <span className="font-medium">{debouche}</span>
                            </div>
                          </Card>
                        ))}
                      </div>
                      </div>
                    </TabsContent>
                </Tabs>

                <Separator className="my-8" />

                <div className="sm:flex-row gap-4 flex flex-col justify-center">
                  <Button className="group" variant="default">
                    <span className="absolute inset-0 w-full h-full bg-[#130159] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 flex flex-col"></span>
                    <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-white flex flex-row items-center justify-center">
                      Candidater maintenant
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Section principale des Formations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne de gauche (liste des formations) */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-[#21c45d] flex md:justify-center sm:justify-center gap-3">
                <Icon
                  className="w-[30px] text-[#51be78] h-[30px]"
                  icon="icons8:student"
                />{" "}
                Nos filières professionnelles
              </h2>

              {/* Message d'instruction sur mobile */}
              <p className="lg:hidden text-center text-gray-600 dark:text-gray-400 mb-6 px-4">
                Cliquez sur une formation pour voir ses détails en grand.
              </p>

              <div className="space-y-4">
                {formations.map((formation) => (
                  <motion.div
                    layoutId={`card-${formation.id}-${id}`}
                    key={formation.id}
                    onClick={() => handleCardClick(formation)} // Utilise la nouvelle fonction
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden   ${
                        selectedFormation.id === formation.id && window.innerWidth >= 1024 ? 'border-[#21c45d] shadow-md ' : '' // Souligne la carte sélectionnée sur desktop
                    }`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <Badge className="text-[#21c45d] bg-emerald-100">{formation.niveau}</Badge>
                      </div>
                      <motion.h3
                        layoutId={`title-${formation.id}-${id}`}
                        className="text-lg font-medium text-[#130159] hover:text-green-600"
                      >
                        {formation.titre}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${formation.id}-${id}`}
                        className="text-sm text-justify text-gray-500 dark:text-gray-400"
                      >
                        {formation.description}
                      </motion.p>
                    </CardHeader>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Colonne de droite (Détails de la formation) - Visible sur grand écran uniquement */}
            <div className="hidden lg:block lg:col-span-2">
              <Card className="mb-8 sticky z-30 top-0">
                <div className="relative">
                  <img
                    src={selectedFormation.image}
                    alt={selectedFormation.titre}
                    width={700}
                    height={400}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="text-[#21c45d] bg-white">{selectedFormation.niveau}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedFormation.badges.map((badge) => (
                      <Badge key={badge} variant="secondary">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl text-[#130159]">{selectedFormation.titre}</CardTitle>
                  <CardDescription className="text-lg ">
                    {selectedFormation.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid md:grid-cols-2 gap-2 mb-8">
                    <div className="flex justify-center space-x-2">
                      <Clock className="w-5 h-5 text-[#21c45d]" />
                      <div>
                        <p className="font-medium text-[#130159]">Durée</p>
                        <p className="text-sm text-muted-foreground">{selectedFormation.duree}</p>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-2">
                      <Users className="w-5 h-5 text-[#21c45d]" />
                      <div>
                        <p className="font-medium text-[#130159]">Effectif</p>
                        <p className="text-sm text-muted-foreground">{selectedFormation.effectif}</p>
                      </div>
                    </div>
                  </div>

                  <Tabs defaultValue="objectifs" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 text-[#130159]">
                      <TabsTrigger value="objectifs">Objectifs</TabsTrigger>
                      <TabsTrigger value="debouches">Débouchés</TabsTrigger>
                    </TabsList>

                    <TabsContent value="objectifs" className="mt-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center text-[#130159] hover:text-green-600">
                          <Trophy className="w-5 h-5 mr-2 text-[#21c45d]" />
                          Objectifs de la formation
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          {selectedFormation.objectifs.map((objectif, index) => (
                            <li key={index}>{objectif}</li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="debouches" className="mt-6 text-[#130159]">
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center text-[#130159]">
                          <Briefcase className="w-5 h-5 mr-2 text-[#21c45d]" />
                          Débouchés professionnels
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {selectedFormation.debouches.map((debouche, index) => (
                            <Card key={index} className="p-4">
                              <div className="flex items-center space-x-2">
                                <Briefcase className="w-4 h-4 text-[#21c45d]" />
                                <span className="font-medium">{debouche}</span>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                <Separator className="my-8" />

                  <div className="sm:flex-row gap-4 flex flex-col justify-center">
                    <Button className="group" variant="default">
                      <span className="absolute inset-0 w-full h-full bg-[#130159] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 flex flex-col"></span>
                      <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-[#ffffff] flex flex-row items-center justify-center">
                        Candidater maintenant
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formations;