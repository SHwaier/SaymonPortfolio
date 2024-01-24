
import experienceData from "../data/experience";

export default function Experience() {
  function parseDateString(dateString: string): Date {
    const [month, year] = dateString.split(" ");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthIndex = months.indexOf(month);
    return new Date(parseInt(year), monthIndex);
  }
  let sortedExperience = experienceData.sort((a, b) => parseDateString(b.startDate).getTime() - parseDateString(a.startDate).getTime());

  return (
    <>
        <p>-----still in development (dummy data)-----</p>
          {sortedExperience.map((item) => (
            <div key={item.id} >
              <article data-glow className="p-10 shadow-md bg-[rgba(255,255,255,0.01)]">
              <h3>{item.title}</h3>
              <span>{item.startDate} - {item.endDate}</span>
              <p>{item.description}</p>
              </article>
            </div>
          ))}
    </>
  );
}
