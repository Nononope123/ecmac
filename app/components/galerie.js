"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

import About2Image from "@/public/about2.jpg";
import DiplomeImage from "@/public/diplome.jpg";
import MemoireImage from "@/public/memoire.jpg";
import AtelierImage from "@/public/atelier.jpg";
import StageImage from "@/public/stage.jpg";
import Communaute1Image from "@/public/communaute1.jpg";
import IAImage from "@/public/ia.jpg";
import Etudiants1Image from "@/public/etudiants.jpg";
import About1Image from "@/public/about1.jpg";
import Communaute2Image from "@/public/communaute2.jpg";
import Communaute3Image from "@/public/communaute3.jpg";
import Etudiants2Image from "@/public/etudiants1.jpg";
import Etudiants3Image from "@/public/etudiants2.jpg";
import Slide1 from "@/public/slide1.jpeg";
import Slide2 from "@/public/slide2.jpeg";
import Slide3 from "@/public/slide3.jpeg";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  let [hoveredIndex, setHoveredIndex] = useState(null);


  const filters = ["Tous", "Campus", "Étudiants", "Événements", "Réussite"];

  const mediaItems = [
    { id: 1, type: "image", category: "Campus", thumbnail: About2Image },
    { id: 2, type: "image", category: "Campus", thumbnail: Communaute2Image },
    { id: 3, type: "image", category: "Réussite", thumbnail: MemoireImage },
    { id: 4, type: "image", category: "Étudiants", thumbnail: AtelierImage },
    { id: 5, type: "image", category: "Campus", thumbnail: About1Image },
    { id: 6, type: "image", category: "Événements", thumbnail: IAImage },
    { id: 7, type: "image", category: "Campus", thumbnail: Communaute1Image },
    { id: 8, type: "image", category: "Étudiants", thumbnail: Etudiants1Image },
    { id: 9, type: "image", category: "Réussite", thumbnail: StageImage },
    { id: 10, type: "image", category: "Campus", thumbnail: Communaute3Image },
    { id: 11, type: "image", category: "Réussite", thumbnail: DiplomeImage },
    { id: 12, type: "image", category: "Étudiants", thumbnail: Etudiants2Image },
    { id: 13, type: "image", category: "Campus", thumbnail: Slide3 },
    { id: 14, type: "image", category: "Étudiants", thumbnail: Slide1 },
    { id: 15, type: "image", category: "Campus", thumbnail: Slide2 },
    { id: 16, type: "image", category: "Étudiants", thumbnail: Etudiants3Image },
  ];

  const filteredItems =
    activeFilter === "Tous" ? mediaItems : mediaItems.filter((item) => item.category === activeFilter);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getPageLink = (page) => `#page=${page}`;

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  return (
    <div>
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter}
                size="sm lg:md"
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "font-bold bg-[#130159] text-white px-3 py-1 border border-[#130159] rounded-md" 
                  : "text-[#130159] bg-white px-3 py-1 border border-[#130159] rounded-md"}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 ">
            {paginatedItems.map((item, idx) => (
              <a
                href={item.thumbnail.src}
                key={item.id}
                className="relative group block p-4 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir l'image ${item.category}`}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.10, delay: 0.10 },
                      }}
                    />
                  )}
                </AnimatePresence>

                <div
                  className={cn(
                    "rounded-2xl h-full w-full overflow-hidden  group-hover:border-slate-700 relative z-20",
                    "shadow-xl hover:shadow-3xl transition-all duration-500"
                  )}
                >
                  <div className="relative z-50 pb-20">
                    {item.thumbnail && (
                      <div className="relative h-64 w-full rounded-lg overflow-hidden border-transparent group-hover:border-slate-700 relative z-20">
                        <Image
                          src={item.thumbnail}
                          alt={`Image de la galerie ${item.id}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100  z-30">
                          <div
                            className="bg-white/90 px-3 py-2 rounded-md flex items-center justify-center pointer-events-none  font-bold text-[#130159]"
                          >
                            <Eye className="w-4 h-4 mr-1 text-[#21c45d]" />
                            Voir
                          </div>
                        </div>
                      </div>
                    )}
                    {item.category && (
                        <Badge className="text-xs bg-[#130159] text-white absolute bottom-6 left-6 z-30">
                            {item.category}
                        </Badge>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-12">
                  <Pagination className="mt-10">
                    <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href={getPageLink(currentPage - 1)}
                        onClick={(e) => {
                        e.preventDefault();
                        handlePreviousPage();
                        }} />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" >
                        {currentPage} sur {totalPages} 
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    {/* <PaginationEllipsis /> */}
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationNext href={getPageLink(currentPage + 1)}
                        onClick={(e) => {
                        e.preventDefault();
                        handleNextPage();
                        }}/>
                    </PaginationItem>
                    </PaginationContent>
                  </Pagination>
          </div>
        </div>
      </section>
    </div>
  );
}