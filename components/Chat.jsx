"use client";
import { useState } from "react";
import {
  generateChatResponse,
  fetchUserTokensById,
  subtractTokens,
} from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaUser, FaRobot } from "react-icons/fa";
import { useAuth } from "@clerk/nextjs";

const Chat = () => {
  const { userId } = useAuth();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (query) => {
      const currentTokens = await fetchUserTokensById(userId);
      if (currentTokens < 300) {
        toast.error("Token balance too low");
        return;
      }
      const res = await generateChatResponse([...messages, query]);
      if (!res) {
        toast.error("Something went wrong");
        return;
      }
      setMessages((prev) => [...prev, res.message]);

      const newTokens = await subtractTokens(userId, res.tokens);
      toast.success(`${newTokens} tokens remaining`);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const query = { role: "user", content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        {messages.map(({ role, content }, index) => {
          const avatar = role == "user" ? <FaUser /> : <FaRobot />;
          const bg = role == "user" ? "bg-base-200" : "bg-base-100";

          return (
            <div
              className={`${bg} flex py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300`}
              key={index}
            >
              <span className="mr-4 h-fit pt-2">{avatar}</span>
              <p className="max-w-3xl">{content}</p>
            </div>
          );
        })}
        {isPending && <span className="loading my-2"></span>}
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-primary join-item"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Please Wait..." : "Ask GPTGenius"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Chat;
