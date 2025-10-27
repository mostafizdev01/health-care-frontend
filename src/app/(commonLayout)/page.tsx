import { Hero } from "../components/modules/Home/Hero";
import { Reviews } from "../components/modules/Home/Review";
import { TopDoctors } from "../components/modules/Home/TopDoctors";


export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <TopDoctors />
        <Reviews />
      </main>
    </div>
  );
}
