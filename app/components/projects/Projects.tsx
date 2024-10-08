import projectsData from "../../data/projectsData";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Projects() {
  function parseDateString(dateString: string): Date {
    const [month, year] = dateString.split(" ");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthIndex = months.indexOf(month);
    return new Date(parseInt(year), monthIndex);
  }

  let sortedProjects = projectsData.sort((a, b) => parseDateString(b.startDate).getTime() - parseDateString(a.startDate).getTime());
  sortedProjects = sortedProjects.slice(0, 3);
  return (
    <>
      <div className="block">
        {sortedProjects.map((item) => (
          <div key={item.id} className="p-2">
            <article data-glow className=" md:max-w-2xl">
              <div className=" bg-[rgba(255,255,255,0.01)] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={item.img} alt="" />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {item.startDate}
                      {item.hasEndDate && " - "} {item.hasEndDate && item.endDate}
                    </div>
                    <Link href={`/projects/${item.id}`} className="block mt-1 text-lg leading-tight font-medium text-[var(--foreground)] hover:underline">
                      {item.title}
                    </Link>
                    <p className="mt-2 text-slate-500">{item.description}</p>
                    <div className="row md:flex py-2 w-full justify-start items-center">
                      <div className="md:w-4/5 w-full row flex items-start justify-start">
                        {item.tech.map((tech) => (
                          <div key={tech} className="rounded px-2 bg-indigo-500 mr-1">
                            <p className="text-indigo-50 text-sm">{tech}</p>
                          </div>
                        ))}
                      </div>
                      {/* if the project doesn't have a link to and external source, then don't display the following text */}
                      {item.hasLink && (
                        <div className="text-indigo-500 flex items-end md:justify-end justify-center md:p-0 pt-2 md:w-1/5 w-full">
                          <a href={item.link} className="flex group">
                            {item.linkText}
                            <FontAwesomeIcon className="w-4 pl-1 group-hover:translate-x-1" icon={faArrowRight} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
