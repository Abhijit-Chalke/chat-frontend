import React, { useState } from "react";
import { Message } from "./types";
import UserIdModal from "./components/UserIdModal";
import ChatInterface from "./components/ChatInterface";

const App: React.FC = () => {
  const [currentUserId, setCurrentUserId] = useState<string>("");

  const handleUserIdSubmit = (userId: string) => {
    setCurrentUserId(userId);
  };

  return (
    <div className="h-screen">
      <UserIdModal isOpen={!currentUserId} onSubmit={handleUserIdSubmit} />
      {currentUserId && <ChatInterface currentUserId={currentUserId} />}
    </div>
  );
};

export default App;
