import { Type } from "@sbzen/cron-core";
import { ReCron } from "../../cron/cron";
import Table from "../../table/table";
const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  // Add more data as needed
];
export const Content = () => {
  const tabs = [Type.SECONDS, Type.MINUTES, Type.HOURS, Type.DAY, Type.MONTH];
  return (
    <>
      <div className="px-6 pt-6">
        <div className="flex h-[67vh] sm:h-[73vh] md:[73vh] xl:[80vh] 2xl:h-[83vh] w-[100%] rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 overflow-y-auto">
          {/* <span className="dark:text-white">Content</span> */}

          <ReCron
            tabs={tabs}
            value="* * * * * "
            onChange={(cron) => console.log(cron)}
          />

          <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">
              CRUD Table with Sorting and Filtering
            </h1>
            <Table data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
