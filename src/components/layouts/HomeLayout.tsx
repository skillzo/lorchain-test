import React from "react";

interface props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: props) {
  return (
    <div className="pt-[3em] lg:py-[5em] pb-[10em] md:pb-[5em] h-max px-[1em]">
      {children}
    </div>
  );
}
