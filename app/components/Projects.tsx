import projectsData from "../data/projectsData";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  function parseDateString(dateString: string): Date {
    const [month, year] = dateString.split(" ");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthIndex = months.indexOf(month);
    return new Date(parseInt(year), monthIndex);
  }
  
  let sortedProjects = projectsData.sort((a, b) => parseDateString(b.startDate).getTime() - parseDateString(a.startDate).getTime());
  sortedProjects = sortedProjects.slice(0,3);
  return (
    <>
      <div className="row">
        <h2 className="text-2xl p-2">Latest Projects</h2>
        {sortedProjects.map((item) => (
          <div key={item.id} className="p-2">
            <article data-glow className=" md:max-w-2xl">
              <div className="max-w-md bg-[var(--background)] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={item.img} alt=""/>
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {item.startDate}
                      {item.hasEndDate && " - "} {item.hasEndDate && item.endDate}
                    </div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-[var(--foreground)] hover:underline">
                      {item.title}
                    </a>
                    <p className="mt-2 text-slate-500">{item.description}</p>
                    <div className="row flex items-start py-2 w-full justify-start">
                      <div className="w-4/5 row flex items-start justify-start">
                        {item.tech.map((tech) => (
                          <div key={tech} className="rounded px-2 bg-indigo-500 mr-1">
                            <p className="text-indigo-50">{tech}</p>
                          </div>
                        ))}
                      </div>
                      {item.hasLink && (
                        <div className="text-indigo-500 flex items-end justify-end w-1/5">
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
