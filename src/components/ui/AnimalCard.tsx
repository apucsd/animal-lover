import Image from "next/image";
import React from "react";

const AnimalCard = ({ animal }: { animal: any }) => {
  return (
    <div className="text-white space-y-3 text-center md:w-full ">
      <div className="overflow-hidden cursor-pointer">
        <Image
          height={100}
          width={100}
          className="m-auto w-full h-full hover:brightness-110 duration-300 hover:scale-125"
          src={`${animal.image ? animal.image : "/animal.png"}`}
          alt="animal"
        />
      </div>
      <h3 className="text-lg leading-5 uppercase">{animal.name}</h3>
    </div>
  );
};

export default AnimalCard;
