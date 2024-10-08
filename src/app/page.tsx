"use client";
import AnimalCard from "@/components/ui/AnimalCard";
import SkeletonCard from "@/components/ui/ScaletonCard";
import { useGetAllAnimalQuery } from "@/redux/api/categoryApi";

const HomePage = () => {
  const { data, isLoading } = useGetAllAnimalQuery({});
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-6 my-10 justify-center items-center gap-3 w-full">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((item) => <SkeletonCard key={item} />)
          : data?.map((animal: any) => (
              <AnimalCard key={animal._id} animal={animal} />
            ))}
      </div>
    </div>
  );
};

export default HomePage;
