import React, { useState, KeyboardEvent } from "react";
import { BsGithub } from "react-icons/bs";

interface props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  refetchUser: () => void;
  refetchRepo: () => void;
}
export default function SearchBar({
  search,
  setSearch,
  refetchUser,
  refetchRepo,
}: props) {
  const fetchUser = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      refetchUser();
      refetchRepo();
      setSearch("");
    }
  };
  return (
    <section className="flex items-center py-4 px-6 md:px-8 bg-blue-p space-x-[1.5em]">
      <BsGithub size={35} color="#fff" />
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={fetchUser}
        placeholder="Search or jump to..."
        className="px-4 py-2 rounded-md w-[80%] md:w-[50%] lg:w-[25%] outline-none border-none"
      />
    </section>
  );
}
