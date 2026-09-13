import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies/Technologies";
import type { ITechnologyCard } from "./types/technologyCard";
import Footer from "./components/Footer";
import { Typing } from "./components/typing";


const TechnologiesFetch = async (): Promise<ITechnologyCard[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [techPromise] = useState(() => TechnologiesFetch());

  return (
    <>
      <Nav />
      <Hero />

      <Suspense
        fallback={
          <div className="flex min-h-100 items-center justify-center">
            <p className="text-5xl text-[#64748B]">
              Loading Technologies<Typing className="w-10" />
            </p>
            
          </div>
        }
      >
        <Technologies techPromise={techPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
