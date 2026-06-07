import React from "react";
import { Message } from "../types";

interface ChatMessageProps {
  message: Message;
  currentUserId: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  currentUserId,
}) => {
  const isCurrentUser = message.userID === currentUserId;

  return (
    <div
      className={`flex mb-4 ${isCurrentUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl ${
          isCurrentUser ? "order-2" : "order-1"
        }`}
      >
        <div
          className={`px-4 py-2 rounded-lg ${
            isCurrentUser
              ? "bg-blue-500 text-white rounded-br-none"
              : "bg-gray-200 text-gray-800 rounded-bl-none"
          }`}
        >
          <p className="break-words">{message.message}</p>
        </div>
        <div
          className={`text-xs text-gray-500 mt-1 flex flex-row gap-2${
            isCurrentUser ? "text-right" : "text-left"
          }`}
        >
          <div className="font-bold">
            {isCurrentUser
              ? "You"
              : message.userID.charAt(0).toUpperCase() +
                message.userID.slice(1)}
          </div>
          <div>{new Date(message.timestamp).toLocaleTimeString()}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
