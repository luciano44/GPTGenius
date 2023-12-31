"use client";

import { getAllTours } from "@/utils/action";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList";

const ToursPage = () => {
  const { data, isPending } = useQuery({
    queryKey: ["tours"],
    queryFn: () => getAllTours(),
  });

  return (
    <>
      {isPending ? (
        <span className="loading loading-lg"></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
};
export default ToursPage;
