"use client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const DeleteDestination = ({ destination }) => {
  const { _id, destinationName } = destination;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    // redirect('/destination')
    // console.log(data)
    if (data.deletedCount > 0) {
      toast.success("Destination Successfully Delete");
      redirect('/destination')
    } else {
      toast.error("Destination Delete Failed");
    }
  };
  return (
    <div>
      <AlertDialog>
        <Button variant="danger-soft">
          <TrashBin></TrashBin> Delete
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete Destination permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong>{destinationName}</strong> and all of its data. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button slot="close" variant="danger" onClick={handleDelete}>
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteDestination;
