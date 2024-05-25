import { SkillIndicator } from "./SkillIndicator";

interface CVSkillProps {
  title: string;
  skills: { name: string; level: number }[];
}
export const CVSkill = (skills: CVSkillProps) => {
  return (
    <div>
      <h2 className="text-lg lg:text-2xl text-teal-600 mt-4">{skills.title}</h2>
      <hr className="w-full h-[.3rem] bg-teal-600  mb-2" />
      {skills.skills.map((skill, $index) => (
        <div key={$index} className="flex justify-between mb-5">
          <h3 className="text-lg lg:text-2xl">{skill.name}</h3>
          <SkillIndicator label={skill.name} level={skill.level} />
        </div>
      ))}
    </div>
  );
};
