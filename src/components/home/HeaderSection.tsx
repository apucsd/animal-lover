"use client";
import React from "react";
import Category from "./Category";
import { AddAnimalModal } from "../modal/AddAnimalModal";
import { AddCategoryModal } from "../modal/AddCategoryModal";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import SkeletonLink from "../ui/ScaletonLink";

const HeaderSection = () => {
  const { data, isLoading } = useGetAllCategoriesQuery({});
  const categoryData = data?.map((category: any) => {
    return {
      _id: category._id,
      name: category.name,
      href: `/category/${category.name}`,
    };
  });

  return (
    <div className="flex md:justify-between justify-center flex-wrap gap-5   items-center ">
      <div className="flex items-center jub gap-4 text-center">
        {/* categories */}
        {isLoading
          ? [1, 2, 3].map((item) => <SkeletonLink key={item} />)
          : categoryData?.map((category: any) => (
              <Category key={category._id} category={category} />
            ))}
      </div>

      {/* add animal and category modal */}
      <div className="flex gap-4">
        <AddAnimalModal />
        <AddCategoryModal />
      </div>
    </div>
  );
};

export default HeaderSection;
