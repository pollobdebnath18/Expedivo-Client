"use client";

import React from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const EditModal = ({ destination }) => {
  const {
    _id,
    destinationName,
    category,
    country,
    imageUrl,
    price,
    description,
    duration,
    departureDate,
  } = destination;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updatedDestination = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDestination),
    });

    const data = await res.json();

    if (data.modifiedCount > 0 || data.success) {
      toast.success("Destination Updated Successfully");
    } else {
      toast.error("Update Failed");
    }
  };

  return (
    <Modal>
      <Button className="flex items-center gap-2 bg-black text-white">
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Edit Destination</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  onSubmit={onSubmit}
                >
                  {/* Destination Name */}
                  <TextField
                    name="destinationName"
                    defaultValue={destinationName}
                  >
                    <Label>Destination Name</Label>
                    <Input />
                  </TextField>

                  {/* Country */}
                  <TextField name="country" defaultValue={country}>
                    <Label>Country</Label>
                    <Input />
                  </TextField>

                  {/* Category */}
                  <TextField name="category" defaultValue={category}>
                    <Label>Category</Label>
                    <Input />
                  </TextField>

                  {/* Price */}
                  <TextField name="price" defaultValue={price}>
                    <Label>Price</Label>
                    <Input type="number" />
                  </TextField>

                  {/* Duration */}
                  <TextField name="duration" defaultValue={duration}>
                    <Label>Duration (days)</Label>
                    <Input type="number" />
                  </TextField>

                  {/* Departure Date */}
                  <TextField name="departureDate" defaultValue={departureDate}>
                    <Label>Departure Date</Label>
                    <Input type="date" />
                  </TextField>

                  {/* Image URL */}
                  <TextField
                    className="md:col-span-2"
                    name="imageUrl"
                    defaultValue={imageUrl}
                  >
                    <Label>Image URL</Label>
                    <Input />
                  </TextField>

                  {/* Description */}
                  <TextField
                    className="md:col-span-2"
                    name="description"
                    defaultValue={description}
                  >
                    <Label>Description</Label>
                    <Input />
                  </TextField>

                  {/* Buttons */}
                  <div className="md:col-span-2 flex justify-end gap-3 mt-2">
                    <Button type="button" slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="bg-black text-white"
                    >
                      Update Destination
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
