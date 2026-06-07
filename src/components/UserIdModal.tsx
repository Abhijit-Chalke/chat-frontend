import React, { useState } from "react";

interface UserIdModalProps {
  isOpen: boolean;
  onSubmit: (userId: string) => void;
}

const UserIdModal: React.FC<UserIdModalProps> = ({ isOpen, onSubmit }) => {
  const [userId, setUserId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId.trim()) {
      onSubmit(userId.trim());
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Enter Your User ID
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your user ID"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            autoFocus
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
            disabled={!userId.trim()}
          >
            Start Chatting
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserIdModal;
