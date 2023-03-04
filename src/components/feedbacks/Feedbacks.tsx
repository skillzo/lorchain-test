import React from "react";
import { BsSearch } from "react-icons/bs";
import FeedbackLayout from "../layouts/FeedbackLayout";

interface props {
  component?: React.ReactElement;
  text?: string;
}
export default function Feedbacks({ component, text }: props) {
  return (
    <FeedbackLayout>
      <div className="text-[#808080] flex flex-col items-center justify-center">
        {component}
        <p className="w-max text-center text-medium mt-4">{text}</p>
      </div>
    </FeedbackLayout>
  );
}
