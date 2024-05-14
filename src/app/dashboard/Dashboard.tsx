import { ReCron } from "../../components/cron";
import { Type } from "@sbzen/cron-core";

const Dashboard = () => {
  const tabs = [Type.SECONDS, Type.MINUTES, Type.HOURS, Type.DAY, Type.MONTH];

  return (
    <div className="container mx-auto py-8">
      <ReCron
        tabs={tabs}
        value="* * * * * "
        onChange={(cron) => console.log(cron)}
      />
    </div>
  );
};

export default Dashboard;
