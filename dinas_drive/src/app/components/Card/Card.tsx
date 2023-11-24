import React from "react";
import profilePic from "../../assets/profile-pic.png";
import profilePic2 from "../../assets/red-profile-pic.png";
import Image from "next/image";

interface CardProps {
  textContent: string[];
  image: string;
}

export default function Card({ textContent, image }: CardProps) {
  console.log(textContent);
  return (
    <div
      id="Persona card"
      className="flex h-full w-full flex-col items-center rounded-2xl bg-neutral-100 bg-opacity-50"
    >
      <span className="flex h-52 w-52 items-center justify-center">
        <Image
          src={image}
          alt="profile image"
          height="180"
          width="180"
          className="rounded-full"
        />
      </span>
      {textContent.map((text) => (
        <p className="mt-1 px-4 text-center font-medium">{text}</p>
      ))}
      {/* <p className="text-center px-4 font-medium mt-1">Hi, my name is Dina. I own and run Dina's Drive, where I teach people of all ages and experience how to drive!</p>
        <p className="text-center px-4 font-medium mt-1">Currently I cover Petersfield to Portsmouth.</p> */}
    </div>
  );
}
