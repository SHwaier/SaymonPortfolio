import Socials from "@/components/Socials";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import projects from "@/data/projectsData";
import { Boxes } from "@/components/ui/background-boxes";
export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="p-12 flex flex-col md:flex-row relative overflow-hidden ">
          <div className="absolute inset-0 w-full h-full bg-background z-20 mask-r-from-20% mask-r-to-90% pointer-events-none" />

          <Boxes />

          <div className="flex flex-col w-full md:w-1/3 justify-center h-screen relative z-30">
            <p className="text-primary">Hello I am =&gt; &#123;</p>
            <h2 className="text-4xl sm:text-7xl">Saymon Hwaier</h2>
            <p className="text-primary">&#125;</p> 
            <p className="text-sm text-primary">{"//"}Welcome to my custom syntax world</p>
            <div className="py-2 w-full flex items-center">
              <Button asChild variant="default" className="shadow-md mr-5">
                <Link href="/resume">
                  Resume
                </Link>
              </Button>
              <Button asChild variant="outline" className="mr-5">
                <Link href="https://www.linkedin.com/in/saymon-hwaier/">
                  Let&apos;s Talk
                </Link>
              </Button>

              <Socials />
            </div>
          </div>
          <div className=" w-full md:w-2/3 md:justify-end flex flex-col md:flex-row ">

            <BentoGrid className="max-w-4xl md:auto-rows-[20rem] m-0">
              {projects.slice(0, 7).map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={<img src={item.img} alt={item.title} className="flex flex-1 w-full h-full min-h-[6rem] rounded-md object-cover" />}

                  className={i === 3 || i === 6 ? "md:col-span-2 relative z-30" : "relative z-30"}
                />
              ))}
            </BentoGrid>

          </div>
        </div>
      </div>
    </>
  );
}
