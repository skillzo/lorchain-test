import React from "react";

interface props {
  children: React.ReactNode;
}

export default function FeedbackLayout({ children }: props) {
  return (
    <div className="fixed z-10 top-[45%] left-0  my-auto w-full ">
      {children}
    </div>
  );
}
