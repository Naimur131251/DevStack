import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies/Technologies";
import type { ITechnologyCard } from "./types/technologyCard";
import Footer from "./components/footer";

const TechnologiesFetch = async (): Promise<ITechnologyCard[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App ()  {
  const [techPromise] = useState(() => TechnologiesFetch());
  
  return (
    <>
      <Nav />
      <Hero />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies 
          techPromise = {techPromise}
        />
      </Suspense>

      <Footer />
    </>
  );
};

export default App;