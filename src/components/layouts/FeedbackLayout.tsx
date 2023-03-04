import React from "react";

interface props {
  children: React.ReactNode;
}

export default function FeedbackLayout({ children }: props) {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center">
      {children}
    </div>
  );
}
