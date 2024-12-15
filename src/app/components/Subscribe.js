import React from "react";
import { FaAngleRight, FaComments } from "react-icons/fa";
const Subscribe = () => {
  return (
    <div class="flex justify-center flex-col m-auto">
      <div class="mx-auto">
        <div>
          <h1 class="text-white text-center">
            Join thousands who trust Urban Spacer for their real estate needs.
          </h1>
        </div>
        <div class="mt-5">
          <button class="bg-white flex mx-auto items-center px-4 py-2 rounded-[25]">
            Talk to us <FaComments className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
