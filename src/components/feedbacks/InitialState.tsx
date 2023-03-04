import React from "react";
import { BsSearch } from "react-icons/bs";
import FeedbackLayout from "../layouts/FeedbackLayout";

export default function InitialState() {
  return (
    <FeedbackLayout>
      <div className="text-[#808080] flex flex-col items-center border border-black">
        <BsSearch size={100} />
        <p className="w-[60%] text-center text-medium">
          Start with searching a GitHub user
        </p>
      </div>
    </FeedbackLayout>
  );
}
