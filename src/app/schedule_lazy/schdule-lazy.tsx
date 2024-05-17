import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Table1 } from "./data-table-lazy";
const queryClient = new QueryClient();

const ScheduleLazy = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <Table1 />
      </div>
    </QueryClientProvider>
  );
};

export default ScheduleLazy;
