"use client";

import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AlertDialogProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const AlertDialog = ({ isOpen, message, onClose }: AlertDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay onClick={onClose} />
      <DialogContent>
        <DialogTitle>Alert</DialogTitle>
        <div className="space-y-4 mt-4">
          <p>{message}</p>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <Button variant="default" onClick={onClose}>
            OK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AlertDialog;
