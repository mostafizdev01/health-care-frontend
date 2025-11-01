import { CTA } from "@/src/components/module/Home/CTA";
import { FAQ } from "@/src/components/module/Home/FAQ";
import { Hero } from "@/src/components/module/Home/Hero";
import { HowItWorks } from "@/src/components/module/Home/HowItWork";
import { Reviews } from "@/src/components/module/Home/Review";
import { Specialties } from "@/src/components/module/Home/Specialties";
import { TopDoctors } from "@/src/components/module/Home/TopDoctors";

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
