"use client";
/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAddCategoryMutation } from "@/redux/api/categoryApi";

import { useState } from "react";
import { toast } from "sonner";

export function AddCategoryModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [addCategory] = useAddCategoryMutation();

  const handleSubmit = async () => {
    if (!name) {
      setError("Category name is required.");
      return;
    }

    try {
      const res = await addCategory({ name }).unwrap();
      if (res.insertedId) {
        toast.success("Added a category successfully");
      }
    } catch (err: any) {
      toast.error(err.message ? err.message : "Something went wrong");
    }

    setOpen(false);
    setName("");
    setError("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-transparent hover:bg-transparent border hover:text-green-500 hover:border-green-500 rounded-3xl"
          size={"lg"}
          style={{ padding: "8px 30px" }}
        >
          Add Category
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            onChange={(e) => {
              setName(e.target.value);
              setError(""); // Clear error message
            }}
            value={name}
            id="name"
            className="w-full"
            placeholder="Name"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            style={{ padding: "26px 40px" }}
            className="w-full"
            type="button"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
