import React from 'react'
import profilePic from '../../assets/profile-pic.png'
import profilePic2 from '../../assets/red-profile-pic.png'
import Image from "next/image"

export default function Card() {
  return (
    <div label="Persona card" className="flex flex-col bg-opacity-50 w-full h-full items-center rounded-2xl bg-neutral-100">
        <span className="flex h-40 w-40 items-center justify-center">
            <Image src={profilePic2} alt="profile image" height="120" width="120" className="rounded-full"/>
        </span>
        <p className="text-center px-4 font-medium mt-1">Hi, my name is Dina. I own and run Dina's Drive, where I teach people of all ages and experience how to drive!</p>
        <p className="text-center px-4 font-medium mt-1">Currently I cover Petersfield to Portsmouth.</p>
    </div>
  )
}