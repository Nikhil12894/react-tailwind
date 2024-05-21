import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface DataAddRowProps {
  onOpenDialogFunc: (value: boolean) => void;
}
const DataAddRow = ({ onOpenDialogFunc }: DataAddRowProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="ml-auto h-8 lg:flex"
      onClick={() => onOpenDialogFunc(true)}
    >
      <FontAwesomeIcon icon={faPlus} className="mr-2 h-4 w-4" />
      Add
    </Button>
  );
};

export default DataAddRow;
