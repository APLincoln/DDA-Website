import React from "react";
import profilePic from "../../assets/profile-pic.png";
import profilePic2 from "../../assets/red-profile-pic.png";
import Image, { StaticImageData } from "next/image";
import { Sarpanch } from "next/font/google";

interface CardProps {
  textContent: string[];
  image: StaticImageData;
  rounded: boolean;
  reversed: boolean;
}

export default function Card({
  textContent,
  image,
  rounded,
  reversed = false,
}: CardProps) {
  return (
    <>
      <div
        id="Persona card"
        className={`flex h-full w-full flex-col items-center rounded-2xl bg-neutral-100 bg-opacity-50 lg:hidden lg:flex-row lg:px-2`}
      >
        <span className="flex h-52 w-52 items-center justify-center">
          <Image
            src={image}
            alt="profile image"
            height="180"
            width="180"
            className={`${rounded ? "rounded-full" : ""}`}
          />
        </span>
        <div className="flex h-full w-full flex-col justify-center">
          {textContent.map((text) => (
            <p className="mt-1 px-4 text-center font-medium">{text}</p>
          ))}
        </div>
      </div>
      {reversed ? (
        <div
          id="Persona card"
          className={`hidden h-full w-full flex-col items-center rounded-2xl bg-neutral-100 bg-opacity-50 lg:flex lg:flex-row `}
        >
          <span className="flex h-52 basis-1/5 items-center justify-center">
            <Image
              src={image}
              alt="profile image"
              height="180"
              width="180"
              className={`${rounded ? "rounded-full" : ""}`}
            />
          </span>
          <div className="flex h-full basis-3/5 flex-col justify-center">
            {textContent.map((text) => (
              <p className="mt-1 px-4 text-center font-medium">{text}</p>
            ))}
          </div>
          <span className="basis-1/5" />
        </div>
      ) : (
        <div
          id="Persona card"
          className={`hidden h-full w-full flex-col items-center rounded-2xl bg-neutral-100 bg-opacity-50 lg:flex lg:flex-row`}
        >
          <span className="basis-1/5" />
          <div className="flex h-full basis-3/5 flex-col justify-center">
            {textContent.map((text) => (
              <p className="mt-1 px-4 text-center font-medium">{text}</p>
            ))}
          </div>
          <span className="flex h-52 basis-1/5 items-center justify-center">
            <Image
              src={image}
              alt="profile image"
              height="180"
              width="180"
              className={`${rounded ? "rounded-full" : ""}`}
            />
          </span>
        </div>
      )}
    </>
  );
}
