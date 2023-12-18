"use client";
import TourInfo from "./TourInfo";

function submitHandler(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const destionation = Object.fromEntries(formData.entries());

  console.log(destionation);
}

const NewTour = () => {
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
      <div className="mt-16">
        <TourInfo />
      </div>
    </>
  );
};
export default NewTour;
