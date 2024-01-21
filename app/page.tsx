import { useEffect } from "react";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="p-12 lg:flex justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-indigo-500">Hello I am =&gt; &#123;</p>
            <h2 className="md:text-7xl">Saymon Hwaier</h2>
            <p className="text-indigo-500">&#125;</p> <p className="text-sm text-indigo-500">//PS: this is my own imaginary syntax :)</p>
            <div className="py-2 flex items-center">
              <a href="#">
                <article data-glow className="p-2 px-3 bg-[var(--background)] border-slate-900 shadow-md border-2">Resume</article>
              </a>
              <Socials />
            </div>
          </div>
          <div>
            <Projects />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
