export const CVSummery = ({
  title,
  points,
}: {
  title: string;
  points: string[];
}) => {
  return (
    <div>
      <h2 className="text-lg lg:text-2xl text-teal-600">{title}</h2>
      <hr className="w-full h-[.3rem] bg-teal-600 mb-2" />
      <ul className="text-xs lg:text-lg text-wrap list-disc text-muted-foreground text-teal-600 ml-4">
        {points.map((point, $index) => (
          <li key={$index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};
