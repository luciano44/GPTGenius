"use client";
import TourInfo from "./TourInfo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getExistingTour,
  generateTourResponse,
  createNewTour,
} from "@/utils/action";
import toast from "react-hot-toast";

const NewTour = () => {
  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const newTour = await generateTourResponse(destination);
      if (newTour) {
        return newTour;
      }
      toast.error("No matching city found...");
      return null;
    },
  });

  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const destionation = Object.fromEntries(formData.entries());

    mutate(destionation);
  }

  if (isPending) return <span className="loading loading-lg"></span>;

  return (
    <>
      <form onSubmit={submitHandler} className="max-w-2xl">
        <h2 className="mb-4">Select your dream destination</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="city"
            name="city"
            required
          />
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="country"
            name="country"
            required
          />
          <input
            type="submit"
            value="Generate Tour"
            className="btn btn-primary join-item"
          />
        </div>
      </form>
      <div className="mt-16">{tour ? <TourInfo tour={tour} /> : null}</div>
    </>
  );
};
export default NewTour;
