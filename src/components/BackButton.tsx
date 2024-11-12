import React from "react";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-4 left-4 flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
