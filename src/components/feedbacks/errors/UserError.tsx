import FeedbackLayout from "@/components/layouts/FeedbackLayout";
import React from "react";
import { BsPerson } from "react-icons/bs";

export default function UserError() {
  return (
    <FeedbackLayout>
      <div className="text-[#808080] flex flex-col items-center border border-black">
        <BsPerson size={100} />
        <p className="w-[60%] text-center text-medium">User not found</p>
      </div>
    </FeedbackLayout>
  );
}
