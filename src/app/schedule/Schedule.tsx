import { DataTable } from "./data-table";
import { scheduleData } from "../schedule";
import { columns } from "./columns";
const hiddenColumns = {
  created_by: false,
  creation_date: false,
  last_updated_by: false,
  last_update_date: false,
  id: false,
};
const Schedule = () => {
  const data = scheduleData;
  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">
          CRUD Table with Sorting and Filtering
        </h1>
        <DataTable
          columns={columns}
          data={data}
          hiddenColumns={hiddenColumns}
          filterData={{
            filterColl: "schedule_id",
            filterPlaceHolder: "Search by scheduleId",
            filterCollDropdownOptions: [
              {
                label: "Cron",
                value: "cron_schedule",
                options: [
                  { label: "*/5 * * * * *", value: "*/5 * * * * *" },
                  { label: "*/15 * * * * *", value: "*/15 * * * * *" },
                  { label: "*/20 * * * * *", value: "*/20 * * * * *" },
                  { label: "*/35 * * * * *", value: "*/35 * * * * *" },
                  { label: "0/10 * * ? * *", value: "0/10 * * ? * *" },
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Schedule;
