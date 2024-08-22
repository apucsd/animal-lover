"use client";

import AnimalCard from "@/components/ui/AnimalCard";
import SkeletonCard from "@/components/ui/ScaletonCard";
import { useGetAnimalByCategoryQuery } from "@/redux/api/categoryApi";

const CategoryPage = ({
  params,
}: {
  params: {
    categoryId: string;
  };
}) => {
  const category = params.categoryId;

  const { data, isLoading } = useGetAnimalByCategoryQuery({ category });
  // console.log(data);

  return (
    <div className="text-white">
      <div className="grid grid-cols-2 md:grid-cols-6 my-10 justify-center items-center gap-3 w-full">
        {data?.length <= 0 && <p>No Animal Found!!!</p>}
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((item) => <SkeletonCard key={item} />)
          : data?.map((animal: any) => (
              <AnimalCard key={animal._id} animal={animal} />
            ))}
      </div>
    </div>
  );
};

export default CategoryPage;
