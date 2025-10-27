import { Hero } from "../components/modules/Home/Hero";
import { HowItWorks } from "../components/modules/Home/HowItWork";
import { Reviews } from "../components/modules/Home/Review";
import { TopDoctors } from "../components/modules/Home/TopDoctors";


export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <HowItWorks />
        <TopDoctors />
        <Reviews />
      </main>
    </div>
  );
}
