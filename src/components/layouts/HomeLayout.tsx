import React from "react";
import Profile from "../profile/Profile";
import SearchBar from "../SearchBar";

interface props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: props) {
  return (
    <div className="py-[3em] lg:py-[5em] bg-[#E5E5E5] h-screen max-h-full  px-[1em]">
      {children}
    </div>
  );
}
