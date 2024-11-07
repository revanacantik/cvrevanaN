import Hero from "./components/hero";

import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import "./reva-style.css";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import HobbiesGallery from "./components/hobi";
import PersonalInfo from "./components/biodata";
import Rating from "./components/contact";


export default function CVonline() {
  return (   
    <section>
      <Hero/>
      <PersonalInfo/>
      <RiwayatPekerjaan/>
      <RiwayatPendidikan/>
      <HobbiesGallery/>
      <Rating/>
      
      
    </section>
  );
}
