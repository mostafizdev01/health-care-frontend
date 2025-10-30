import { CTA } from "../components/modules/Home/CTA";
import { FAQ } from "../components/modules/Home/FAQ";
import { Hero } from "../components/modules/Home/Hero";
import { HowItWorks } from "../components/modules/Home/HowItWork";
import { Reviews } from "../components/modules/Home/Review";
// import { ServiceComponents } from "../components/modules/Home/Services";
import { Specialties } from "../components/modules/Home/Specialties";
import { TopDoctors } from "../components/modules/Home/TopDoctors";


export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <HowItWorks />
        <Specialties />
        {/* <ServiceComponents /> */}
        <TopDoctors />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
