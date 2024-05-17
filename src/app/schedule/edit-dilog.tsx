import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export interface EditableDeletableTableProps<T> {
  tableData: T[];
}
export function EditableDeletableTable<T>({
  tableData,
}: EditableDeletableTableProps<T>) {
  const [data, setData] = useState(tableData);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [editForm, setEditForm] = useState<any>({});
  const [deleteRowId, setDeleteRowId] = useState(null);

  const handleEditClick = (row: any) => {
    setEditRow(row);
    setEditForm(row.original);
    setIsEditDialogOpen(true);
  };

  const handleDeleteClick = (id: any) => {
    setDeleteRowId(id);
    setIsDeleteDialogOpen(true);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleSave = () => {
    const newData = data.map((row: any) =>
      row.id === editForm.id ? editForm : row
    );
    setData(newData);
    setIsEditDialogOpen(false);
  };

  const handleDelete = () => {
    const newData = data.filter((row: any) => row.id !== deleteRowId);
    setData(newData);
    setIsDeleteDialogOpen(false);
  };

  return (
    <div>
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>Edit Row</DialogHeader>
          <DialogContent>
            <Input
              name="name"
              placeholder="Name"
              value={editForm.name || ""}
              onChange={handleInputChange}
            />
            {/* Add other input fields as needed */}
          </DialogContent>
          <DialogFooter>
            <Button onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>Delete Row</DialogHeader>
          <DialogContent>
            Are you sure you want to delete this row?
          </DialogContent>
          <DialogFooter>
            <Button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
