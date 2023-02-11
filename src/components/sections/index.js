import React from "react";

const Sections = ({ content, title, icon }) => {
  return (
    <div className="w-full flex justify-between shadow-gray-400 bg-white shadow-sm rounded-md px-5 py-3 items-center">
      <div>
        <p className="font-bold capitalize">{content}</p>
        <p className="text-sm">{title}</p>
      </div>
      <div>
        <img src={icon} alt={title} className="w-10" />
      </div>
    </div>
  );
};

export default Sections;
