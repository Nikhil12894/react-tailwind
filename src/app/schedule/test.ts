interface Schedule {
  id: number;
  title: string;
  start: Date;
  end: Date;
  location: string;
}

const sampleSchedule: Schedule = {
  id: 1,
  title: "Meeting",
  start: new Date(),
  end: new Date(),
  location: "Conference Room",
};

interface ColumnConfig<T> {
  field: keyof T;
  headerName: string;
  sortable?: boolean;
  filter?: boolean;
  width?: number;
  flex?: number;
  valueFormatter?: (params: any) => string;
}

const scheduleColumnConfigs: ColumnConfig<Schedule>[] = [
  { field: "id", headerName: "ID", sortable: true, filter: true, width: 100 },
  {
    field: "title",
    headerName: "Title",
    sortable: true,
    filter: true,
    flex: 1,
  },
  {
    field: "start",
    headerName: "Start Time",
    sortable: true,
    filter: true,
    width: 200,
    valueFormatter: (params) =>
      params.value ? new Date(params.value).toLocaleString() : "",
  },
  {
    field: "end",
    headerName: "End Time",
    sortable: true,
    filter: true,
    width: 200,
    valueFormatter: (params) =>
      params.value ? new Date(params.value).toLocaleString() : "",
  },
  {
    field: "location",
    headerName: "Location",
    sortable: true,
    filter: true,
    flex: 1,
  },
];

interface ColumnDef<T> {
  field: keyof T;
  headerName: string;
  sortable?: boolean;
  filter?: boolean;
  width?: number;
  flex?: number;
  valueFormatter?: (params: any) => string;
}

function generateColumnDefs<T>(
  columnConfigs: ColumnConfig<T>[]
): ColumnDef<T>[] {
  return columnConfigs.map((config) => ({
    field: config.field,
    headerName: config.headerName,
    sortable: config.sortable,
    filter: config.filter,
    width: config.width,
    flex: config.flex,
    valueFormatter: config.valueFormatter,
  }));
}

const scheduleColumnDefs = generateColumnDefs<typeof sampleSchedule>(
  scheduleColumnConfigs
);

export default scheduleColumnDefs;
