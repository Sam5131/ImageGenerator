import React from "react";
import { download } from "../assets";
import { downloadImage } from "../utils";
const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div>
      <div className="rounded=x1 group relative shadow-card hover:shadow-cardhover card">
        <img
          className="w-full h-auto object-cover rounded-x1"
          src={photo}
          alt={prompt}
        />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
          <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>
          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center item-center text-white text-xs font-bold">
                <p className="text-white text-sm">{name[0]}</p>
              </div>
              <button type='button' onClick={()=>downloadImage(_id,photo)} className="outline-none bg-transparent border-none">
                <img src = {download} alt = {download} className="w-6 h-6 object-contain invert"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;