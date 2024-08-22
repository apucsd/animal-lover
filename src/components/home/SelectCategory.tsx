"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";

import { Dispatch, SetStateAction } from "react";
const SelectCategory = ({
  setAnimalCategory,
}: {
  setAnimalCategory: Dispatch<SetStateAction<string>>;
}) => {
  const { data, isLoading } = useGetAllCategoriesQuery({});
  //   console.log(categories);
  //  make select need data
  const SelectCategories = data?.map((category: any) => {
    return {
      _id: category._id,
      label: category.name,
      value: category.name,
    };
  });
  // console.log(SelectCategories);

  return (
    <Select
      onValueChange={(value) => setAnimalCategory(value)}
      disabled={isLoading}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select A Category" />
      </SelectTrigger>
      <SelectContent>
        {SelectCategories.map((category: any) => (
          <SelectItem
            className="capitalize"
            key={category._id}
            value={category.value}
          >
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
