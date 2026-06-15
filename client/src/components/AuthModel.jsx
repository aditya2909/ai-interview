import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import Auth from "../pages/Auth";

export default function AuthModel({ onClose }) {
  const { userData } = useSelector((state) => state.user);
  useEffect(() => {
    if (userData) {
      onClose();
    }
  }, [userData, onClose]);

  return (
    <div className="fixed inset-0 z-999 bg-black/10 backdrop-blur-sm px-4 flex items-center justify-center">
      <div className="relative w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-8 right-5 text-gray-800 hover:text-black text-xl"
        >
          <FaTimes size={24} />
        </button>
        <Auth isModel={true} />
      </div>
    </div>
  );
}
