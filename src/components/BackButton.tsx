import React from "react";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-4 left-4 flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
