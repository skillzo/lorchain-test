import React from "react";
import Image from "next/image";
import { MdPeopleAlt } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

export default function Profile(user: any) {
  const userData = user?.user;
  return (
    <div className="flex lg:flex-col lg:items-center items-center space-x-4 md:space-x-[2em] lg:space-x-0">
      <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] object-cover rounded-full ">
        <Image
          src={userData?.avatar_url}
          alt="profile picture"
          fill
          style={{ objectFit: "cover", borderRadius: "100%" }}
        />
      </div>
      <div className="w-[70%] lg:mt-8 lg:mx-auto lg:space-y-4">
        <p className="font-semibold  text-2xl w-[90%] md:w-[60%] lg:w-full truncate">
          {userData?.name}
        </p>
        <a
          href={userData?.html_url}
          target="_blank"
          className="text-blue-p font-semibold text-md"
        >
          {userData?.login || "skillzo"}
        </a>
        <div className="mt-2 md:flex md:space-x-[1em]">
          <div className="flex items-center space-x-1">
            <MdPeopleAlt size={20} color="#191C1F" />
            <p className="font-medium text-slate-700 text-sm">
              {userData?.followers} followers
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <BsFillPersonFill size={20} color="#191C1F" />
            <p className="font-medium text-slate-700 text-sm">
              {userData?.following} following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
