
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
        
          {sortedExperience.map((item) => (
            <div key={item.id}>
              
            </div>
          ))}
    </>
  );
}
