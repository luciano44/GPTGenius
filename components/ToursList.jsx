"use client";
import TourCard from "./TourCard";
import { useState } from "react";

const ToursList = ({ data }) => {
  const [tours, setTours] = useState(data);

  if (data.length === 0) return <h4 className="text-lg">No tours found...</h4>;

  function inputHandler(v) {
    const filteredTours = data.filter(
      (tour) =>
        tour.city.toLowerCase().includes(v.toLowerCase()) ||
        tour.country.toLowerCase().includes(v.toLowerCase())
    );

    console.log(filteredTours);
    setTours(filteredTours);
  }

  return (
    <>
      <div class="mb-6">
        <label for="default-input" class="block mb-2 text-sm font-medium ">
          Search Places
        </label>
        <input
          onChange={(e) => inputHandler(e.target.value)}
          type="text"
          class="border text-sm rounded-lg block w-full p-2.5 bg-base-100"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tours.map((tour) => {
          return <TourCard key={tour.id} tour={tour} />;
        })}
      </div>
    </>
  );
};
export default ToursList;
