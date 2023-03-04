import React from "react";
import Image from "next/image";
import { MdPeopleAlt } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

export default function Profile(user: any) {
  const userData = user?.user;
  return (
    <div className="flex lg:flex-col lg:items-center items-center space-x-4 ">
      <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[300px] lg:h-[300px] object-cover rounded-full ">
        {/* <Image
          src={userData?.avatar_url}
          alt="profile picture"
          fill
          style={{ objectFit: "cover", borderRadius: "100%" }}
        /> */}
      </div>
      <div className="w-[70%] lg:mt-8 lg:mx-auto lg:space-y-4">
        <p className="font-semibold  text-2xl w-[90%] md:w-[60%] truncate">
          {userData?.name || "skillzo"}
        </p>
        <a
          href={userData?.html_url}
          target="_blank"
          className="text-blue-p font-semibold text-md"
        >
          {userData?.login || "skillzo"}
        </a>
        <div className="mt-2">
          <div className="flex items-center space-x-2">
            <MdPeopleAlt size={15} color="#191C1F" />
            <p className="font-medium text-slate-700 text-sm">
              {userData?.followers} followers
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <BsFillPersonFill size={15} color="#191C1F" />
            <p className="font-medium text-slate-700 text-sm">
              {userData?.following} followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
