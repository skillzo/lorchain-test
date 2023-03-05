import React from "react";

interface props {
  children: React.ReactNode;
}

export default function FeedbackLayout({ children }: props) {
  return (
    <div className="relative z-1  h-[80vh]  flex justify-center items-center my-auto w-full ">
      {children}
    </div>
  );
}
