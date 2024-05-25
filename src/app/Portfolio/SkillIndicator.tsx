export const SkillIndicator = ({ level }: { label: string; level: number }) => {
  // Calculate the number of filled circles
  const filledCircles = level;
  // Calculate the number of empty circles
  const emptyCircles = 5 - filledCircles;

  return (
    <div className="flex items-center">
      {/* Render filled circles */}
      {Array.from({ length: filledCircles }, (_, index) => (
        <div
          key={index}
          className="w-3 h-3 lg:w-6 lg:h-6 bg-teal-600 rounded-full mr-1"
        ></div>
      ))}
      {/* Render empty circles */}
      {Array.from({ length: emptyCircles }, (_, index) => (
        <div
          key={index}
          className="w-3 h-3 lg:w-6 lg:h-6 bg-gray-300 rounded-full mr-1"
        ></div>
      ))}
    </div>
  );
};
