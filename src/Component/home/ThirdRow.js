import Wrapped from "./ThirdStyle.js";
function ThirdRow() {
  const skillsSet = [
    { skill: "React js", experience: "3 years", level: 95 },
    { skill: "React Redux", experience: "2 years", level: 80 },
    { skill: "JavaScript", experience: "3 years", level: 90 },
    { skill: "TypeScript", experience: "1 year 6 months", level: 70 },
    { skill: "Node js", experience: "1 year", level: 75 },
    { skill: "Express js", experience: "1 year", level: 75 },
    { skill: "HTML5", experience: "3 years", level: 99 },
    { skill: "CSS3", experience: "3 years", level: 90 },
    { skill: "Styled-Component", experience: "1 year 6 months", level: 80 },
    { skill: "Tailwind", experience: "2 year", level: 80 },
    { skill: "PostgreSQL", experience: "1 year", level: 60 },
    { skill: "SpringBoot", experience: "1 year", level: 50 },
  ];
  return (
    <Wrapped>
      <div className="title protest-revolution-regular">SKILL SET</div>
      <div className="skillsWrapper">
        {skillsSet.map((e, index) => (
          <div
            key={index}
            className="skillCard"
            data-aos="fade-up"
            data-aos-delay={50 * index}
          >
            <div className="skillTitle">{e.skill}</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                <span>{e.experience} of experience</span>
              </span>{" "}
              <span>{e.level}&nbsp;%</span>
            </div>
            <progress value={e.level} className="progressBar" max={100} />
          </div>
        ))}
      </div>
    </Wrapped>
  );
}
export default ThirdRow;
