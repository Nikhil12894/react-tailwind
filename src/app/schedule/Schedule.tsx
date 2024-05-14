import { DataTable } from "./data-table";
import { scheduleData } from "../schedule";
import { columns } from "./columns";

const Schedule = () => {
  const data = scheduleData;
  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">
          CRUD Table with Sorting and Filtering
        </h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Schedule;
