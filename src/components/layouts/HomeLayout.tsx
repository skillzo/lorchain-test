import React from "react";
import Profile from "../profile/Profile";
import SearchBar from "../SearchBar";

interface props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: props) {
  return (
    <div className="pt-[3em] lg:py-[5em] pb-[10em] md:pb-[5em] bg-[#E5E5E5] h-max lg:h-screen px-[1em]">
      {children}
    </div>
  );
}
