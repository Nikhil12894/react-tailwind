import { ReCron } from "../../cron/cron";

export const Content = () => {
  return (
    <>
      <div className="px-6 pt-6">
        <div className="flex h-[67vh] sm:h-[73vh] md:[73vh] xl:[80vh] 2xl:h-[83vh] w-[100%] rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 overflow-y-auto">
          {/* <span className="dark:text-white">Content</span> */}
          <ReCron value="* * * * * *" onChange={(cron) => console.log(cron)} />
        </div>
      </div>
    </>
  );
};
