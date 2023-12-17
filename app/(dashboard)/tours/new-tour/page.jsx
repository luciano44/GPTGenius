import NewTour from "@/components/NewTour";

import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";

export const metadata = {
  title: "Dashboard - Chat",
  description: "Talk to the AI Chat",
};

const NewTourPage = () => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTour />
    </HydrationBoundary>
  );
};
export default NewTourPage;
