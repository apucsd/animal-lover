const SkeletonCard = () => {
  return (
    <div className="text-white space-y-3 text-center p-4">
      <div className="m-auto md:w-32 w-full h-32 border  animate-pulse"></div>
      <div className="border h-5 w-3/4 m-auto rounded animate-pulse"></div>
    </div>
  );
};
export default SkeletonCard;
