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
          <div className="flex flex-col justify-center h-screen">
            <p className="text-indigo-500">Hello I am =&gt; &#123;</p>
            <h2 className="text-4xl sm:text-7xl">Saymon Hwaier</h2>
            <p className="text-indigo-500">&#125;</p> <p className="text-sm text-indigo-500">{"//"}Welcome to my custom syntax world</p>
            <div className="py-2 w-full flex items-center">
              <a href="#" className="bg-indigo-500 rounded-xl mr-5">
                <article data-glow className="p-2 px-3 bg-indigo-500 border-slate-700 shadow-md border-2">
                  Resume
                </article>
              </a>
              <a href="#" className="border-indigo-500 border rounded-xl mr-5">
                <article data-glow className="p-2 px-3 bg-indigo-500 border-slate-700 shadow-md border-2">
                  Let's Talk
                </article>
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
