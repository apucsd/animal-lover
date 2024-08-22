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
import { useState } from "react";
import SelectCategory from "../home/SelectCategory";
import { useAddAnimalMutation } from "@/redux/api/categoryApi";
import getImageURL from "@/utils/getImageURL";
import { toast } from "sonner";

export function AddAnimalModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [animalCategory, setAnimalCategory] = useState("");
  const [file, seFile] = useState<File | null>(null);
  const [errors, setErrors] = useState({ name: "", file: "" });
  const [addAnimal, { isLoading }] = useAddAnimalMutation();
  const handleSubmit = async () => {
    let hasError = false;
    const newErrors = { name: "", file: "" };

    if (!name) {
      newErrors.name = "Animal name is required.";
      hasError = true;
    }

    if (!file) {
      newErrors.file = "Animal image is required.";
      hasError = true;
    }
    const imageURL = await getImageURL(file as File);

    if (!imageURL) {
      newErrors.file = "Invalid image file.";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      try {
        const postData = { name, image: imageURL, category: animalCategory };

        const res = await addAnimal(postData).unwrap();
        if (res.insertedId) {
          toast.success("A Animal created successfully");
          setOpen(false);
        }
      } catch (error: any) {
        toast.error(error.message ? error.message : "Something went wrong");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-transparent hover:bg-transparent border hover:text-green-500 hover:border-green-500 rounded-3xl"
          size={"lg"}
          style={{ padding: "8px 30px" }}
        >
          Add Animal
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Animal</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            {/*  input for title */}
            <Input
              onChange={(e) => setName(e.target.value)}
              id="name"
              required
              className="w-full"
              placeholder="Animal Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          {/* file input custom */}
          <div className="bg-white text-[#333] flex items-center rounded-md overflow-hidden">
            <div className="px-4 flex">
              <p className="text-sm ml-3">Image</p>
            </div>
            <label
              htmlFor="fileUpload"
              className="bg-[#CCCCCC] text-black text-sm px-3 py-2.5 outline-none rounded-md cursor-pointer ml-auto w-max block"
            >
              Upload
            </label>
            <input
              required
              onChange={(e) => seFile(e.target.files?.[0] || null)}
              type="file"
              id="fileUpload"
              className="hidden"
            />
          </div>
          {errors.file && (
            <p className="text-red-500 text-sm mt-1">{errors.file}</p>
          )}
          {/* select category */}
          <SelectCategory setAnimalCategory={setAnimalCategory} />
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            style={{ padding: "26px 40px" }}
            className="w-full"
          >
            {isLoading ? "Loading" : "Create Animal"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
