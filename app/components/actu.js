"use client" // Indique que ce composant est un Client Component dans Next.js, ce qui permet l'utilisation de hooks React et d'interactivité.

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link" // N'oubliez pas d'importer Link si ce n'est pas déjà fait

import Diplome from "@/public/diplome.jpg"
import JpoImage from "@/public/jpo.jpg"
import FemmeImage from "@/public/femme.jpg"
import PaysImage from "@/public/pays.jpg"


export default function ActualitesPage() {
  const allActualites = [
    {
        id: 1,
        title: "Remise des diplômes",
        excerpt:
        "Cérémonie de remise des diplômes pour la première et deuxième cuvée de l'ECMAC.",
        date: "31 Mai 2025", // <-- VIRGULE AJOUTÉE ICI
        author: "Service Communication",
        category: "Événements",
        image: Diplome
    },
    {
        id: 2,
        title: "Journée porte ouverte à l'ECMAC",
        excerpt:
        "L'ECMAC a ouvert ses portes au grand public pour présenter ses formations et ses projets innovants.",
        date: "17 Mai 2025",
        author: "Service Communication",
        category: "Événements",
        image: JpoImage
    },
    {
        id: 3,
        title: "Journée de la femme Gabonaise",
        excerpt:
        "L'ECMAC et toute sa communauté souhaite une excellente journée à toutes les femmes Gabonaises.",
        date: "07 mars 2024",
        author: "Service Communication",
        category: "Événements",
        image: FemmeImage
    },
    {
        id: 4,
        title: "La communauté des Ecmaciens",
        excerpt: "Nous sommes une communauté basée dans l'Afrique centrale.",
        date: "09 juillet 2024",
        author: "Direction Qualité",
        category: "Campus",
        image: PaysImage,
    },
  ]

  const [activeCategory, setActiveCategory] = useState("Tous")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6


  const filteredActualites = activeCategory === "Tous"
    ? allActualites
    : allActualites.filter(actu => actu.category === activeCategory);


  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const paginatedActualites = filteredActualites.slice(startIndex, endIndex)


  const totalPages = Math.ceil(filteredActualites.length / itemsPerPage)


  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }


  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);


  const categories = ["Tous", "Événements", "Réussites", "Campus"]

  const featuredActualite = allActualites[0];
  return (
    <>

      <section className="py-8 flex justify-center border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => ( // <-- Correction ici: suppression de la parenthèse mal placée
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-emerald-600 hover:bg-emerald-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">


              {featuredActualite && (
                <Card className="border-0 shadow-xl mb-12 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={featuredActualite.image}
                      alt={featuredActualite.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      style={{objectFit:"cover", objectPosition: "70% 30%"}}
                      className="z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-50 z-10"></div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      {featuredActualite.category && (
                        <Badge className="text-[#21c45d] bg-emerald-100">{featuredActualite.category}</Badge>
                      )}
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredActualite.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <User className="w-4 h-4" />
                        <span>{featuredActualite.author}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-[#130159] mb-4">
                      {featuredActualite.title}
                    </h2>

                    <p className="text-gray-600 mb-6 text-lg">
                      {featuredActualite.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <Link href={`/actualites/${featuredActualite.id}`} passHref>
                        <Button className="w-full bg-emerald-600 hover:text-white text-sm">
                          <span className="absolute inset-0 w-full h-full bg-[#130159] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 group-hover:text-white"></span>
                          <span className="relative z-10 text-white transition-colors duration-500 ease-in-out flex items-center">
                              Lire la suite
                          <ArrowRight className="w-4 h-4 ml-2" />
                          </span>
                        </Button>
                      </Link>
                    </div>

                  </CardContent>
                </Card>
              )}

              {/* Liste des autres actualites paginées */}
              <div className="space-y-8">
                {paginatedActualites.map((actualite) => (
                  <Card key={actualite.id} className="border-0 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="md:col-span-1">
                          <div className="relative h-32 w-full rounded-lg overflow-hidden">
                            {actualite.image && (
                              <Image
                                src={actualite.image}
                                alt={actualite.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 25vw, 15vw"
                                style={{ objectFit: "cover" }}
                              />
                            )}
                          </div>
                        </div>

                        <div className="md:col-span-3">
                          <div className="flex items-center gap-4 mb-3">
                            {actualite.category && (
                              <Badge variant="outline" className="text-xs text-[#21c45d] bg-emerald-100">
                                {actualite.category}
                              </Badge>
                            )}
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                              <Calendar className="w-3 h-3" />
                              <span>{actualite.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                              <User className="w-3 h-3" />
                              <span>{actualite.author}</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-[#130159] mb-3 hover:text-emerald-600 cursor-pointer">
                            {actualite.title}
                          </h3>

                          <p className="text-gray-600 mb-4">{actualite.excerpt}</p>

                          <div className="flex items-center justify-between">
                            <Link href={`/actualites/${actualite.id}`} className="text-emerald-600 hover:underline">
                              Lire plus
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>


              <div className="flex justify-center mt-12">
                <Button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="bg-emerald-600 hover:bg-emerald-700 mr-4"
                >
                  Précédent
                </Button>
                <span className="text-gray-700 dark:text-gray-300 flex items-center justify-center">
                  Page {currentPage} sur {totalPages}
                </span>
                <Button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="bg-emerald-600 hover:bg-emerald-700 ml-4"
                >
                <span className="absolute inset-0 w-full h-full bg-[#130159] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 group-hover:text-white"></span>
                <span className="relative z-10 text-white transition-colors duration-500 ease-in-out ">
                  Suivant
                  </span>
                </Button>
              </div>
            </div>


            <div className="space-y-8">

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#130159] mb-6">Événements à venir</h3>
                  <div className="space-y-4">

                    <div className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="font-medium text-[#130159] text-sm mb-1">Rentrée académique</h4>
                      <p className="text-xs text-gray-500 mb-1">16 Septembre 2025</p>
                      <p className="text-xs text-gray-600">Début des cours et établissement des cartes d'étudiants.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>


              <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#130159] mb-4">Newsletter ECMAC</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Recevez toutes nos actualités directement dans votre boîte mail.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                    <Button className="w-full bg-emerald-600 hover:text-white text-sm">
                      <span className="absolute inset-0 w-full h-full bg-[#130159] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 group-hover:text-white"></span>
                      <span className="relative z-10 text-white transition-colors duration-500 ease-in-out ">
                          S'abonner
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}