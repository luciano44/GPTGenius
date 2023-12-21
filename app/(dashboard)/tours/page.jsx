import ToursPage from "@/components/ToursPage";
import { getAllTours } from "@/utils/action";
import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";

export const metadata = {
  title: "Dashboard - Chat",
  description: "Talk to the AI Chat",
};

const AllToursPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tours"],
    queryFn: () => getAllTours(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ToursPage />
    </HydrationBoundary>
  );
};
export default AllToursPage;
