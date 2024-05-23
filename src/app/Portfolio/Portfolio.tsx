import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import CVHeader from "./CVHeader";
import { data } from "./data";
export default function Portfolio() {
  const workExp = data.workExp;
  return (
    <Card className="w-fill mr-4 ml-4 mt-4 mb-4 sm:text-base">
      <CardHeader>
        {data.header && <CVHeader header={data.header} />}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 col-span-4">
            <h2>{workExp.title}</h2>
            <hr className="w-full h-[.3rem] bg-cyan-600" />
            {workExp.positions.map((position) => (
              <div key={position.jobTitle}>{position.jobTitle}</div>
            ))}
          </div>
          <div className="col-end-7 col-span-2">
            SUMMARY
            <hr className="w-full h-[.3rem] bg-cyan-600" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button> */}
      </CardFooter>
    </Card>
  );
}
