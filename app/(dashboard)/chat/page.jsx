import Chat from "@/components/Chat";
import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";

export const metadata = {
  title: "Dashboard - Chat",
  description: "Talk to the AI Chat",
};

const ChatPage = () => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Chat />
    </HydrationBoundary>
  );
};
export default ChatPage;
