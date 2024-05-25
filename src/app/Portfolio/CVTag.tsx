export const CVTag = ({ text }: { text: string }) => {
  return (
    <span className="inline-block  p-1 text-black dark:text-white dark:bg-gray-600 mr-2 mb-2 shadow border rounded-md text-xs lg:text-lg">
      {text}
    </span>
  );
};
