import { SkillIndicator } from "./SkillIndicator";

export const CVLanguage = ({
  title,
  languages,
}: {
  title: string;
  languages: { name: string; level: number }[];
}) => {
  return (
    <div>
      <h2 className="text-lg lg:text-2xl text-teal-600 mt-4">{title}</h2>
      <hr className="w-full h-[.3rem] bg-teal-600  mb-2" />
      {languages.map((skill, $index) => (
        <div key={$index} className="flex justify-between mb-5">
          <h3 className="text-lg lg:text-2xl">{skill.name}</h3>
          <SkillIndicator label={skill.name} level={skill.level} />
        </div>
      ))}
    </div>
  );
};
