import React from "react";

interface props {
  description: string;
  name: string;
  url: string;
}

export default function Repo({ description, name, url }: props) {
  return (
    <div className="bg-white active:bg-[#ffffffc4] px-[1.5em] py-[1em] md:py-[2em] rounded-md space-y-2 md:text-[1em]">
      <a
        target="_blank"
        href={url}
        className="text-blue-p font-medium text-lg "
      >
        {name}{" "}
      </a>
      <p className="text-sm">
        {description || "github user didn't add a description"}
      </p>
    </div>
  );
}
