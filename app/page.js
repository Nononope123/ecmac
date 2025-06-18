import Promise from "./components/promise";
import HeroCarousel from "./components/HeroCarousel";
import Filiere from "./components/filiere";
import TariffGrid from "./components/TariffGrid";
import PartnersSection from "./components/partenaire";
import Banner from "./components/Banner";

export default function Home() {
  return (
 <div>
     <HeroCarousel />
     <Promise />
     <Filiere />
     <TariffGrid />
     <PartnersSection />
     <Banner />
    </div>
  );
}
