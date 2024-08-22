"use client";
import { TCategory } from "@/types/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Category = ({ category }: { category: TCategory }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      className={`${
        pathName == category.href
          ? "text-green-500 border-green-500 duration-300"
          : ""
      } hover:border-green-500 capitalize duration-200 hover:text-green-500 border  border-red-600 rounded-3xl py-[8px]  px-[40px] text-red-500`}
      href={category.href}
    >
      {category.name}
    </Link>
  );
};

export default Category;
