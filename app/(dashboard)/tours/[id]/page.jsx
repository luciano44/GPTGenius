import TourInfo from "@/components/TourInfo";
import { getSingleTour } from "@/utils/action";
import { redirect } from "next/navigation";
import Link from "next/link";
import { generateTourImage } from "@/utils/action";
import Image from "next/image";
// import tourImage from "@/public/image.webp";
import axios from "axios";
const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;

const SingleTourPage = async ({ params }) => {
  const tour = await getSingleTour(params.id);
  if (!tour) redirect("/tours");

  // const tourImage = await generateTourImage({
  //   city: tour.city,
  //   country: tour.country,
  // });

  const { data } = await axios.get(`${url}${tour.city}`);
  const tourImage = await data?.results[0]?.urls?.raw;

  return (
    <div>
      <Link href="/tours" className="btn btn-primary mb-12">
        back to tours
      </Link>

      {tourImage && (
        <Image
          src={tourImage}
          height={300}
          width={300}
          className="rounded-xl shadow-xl mb-16 h-96 w-96 object-cover"
          alt={tour.title}
          priority
        />
      )}

      <TourInfo tour={tour} />
    </div>
  );
};

// export const dynamic = "force-dynamic";

export default SingleTourPage;
