import { Button } from "./button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "./dialog";

interface DeleteDialogProps<T> {
  isDeleteDialogOpen: boolean;
  onOpenDialogFunc: (isOpen: boolean) => void;
  deleteFun: (values: T) => void;
  selectedRow: T;
  displayColumn: string;
  heading: string;
}
function DeleteDialog<T>({
  isDeleteDialogOpen,
  onOpenDialogFunc,
  deleteFun,
  selectedRow,
  displayColumn,
  heading,
}: DeleteDialogProps<T>) {
  const handleDelete = () => {
    deleteFun(selectedRow);
    onOpenDialogFunc(false);
  };
  return (
    <Dialog open={isDeleteDialogOpen} onOpenChange={onOpenDialogFunc}>
      <DialogContent className="space-y-6 bg-transparent ">
        <DialogHeader>{heading}</DialogHeader>
        <p>
          Are you sure you want to delete{" "}
          {selectedRow ? (
            <strong>{(selectedRow as any)[displayColumn]}</strong>
          ) : (
            "this row"
          )}
          ?
        </p>
        <DialogFooter>
          <Button onClick={() => onOpenDialogFunc(false)}>Cancel</Button>
          <Button onClick={handleDelete} className="bg-red-500">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
