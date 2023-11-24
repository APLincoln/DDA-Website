import React from 'react'
import profilePic from '../../assets/profile-pic.png'
import profilePic2 from '../../assets/red-profile-pic.png'
import Image from "next/image"

interface CardProps {
  textContent: String[]
  image: String
}

export default function Card({textContent, image}: CardProps) {
    console.log(textContent)
  return (
    <div id="Persona card" className="flex flex-col bg-opacity-50 w-full h-full items-center rounded-2xl bg-neutral-100">
        <span className="flex h-52 w-52 items-center justify-center">
            <Image src={image} alt="profile image" height="180" width="180" className="rounded-full"/>
        </span>
        {textContent.map((text => (
            <p className="text-center px-4 font-medium mt-1">{text}</p>
        )))}
        {/* <p className="text-center px-4 font-medium mt-1">Hi, my name is Dina. I own and run Dina's Drive, where I teach people of all ages and experience how to drive!</p>
        <p className="text-center px-4 font-medium mt-1">Currently I cover Petersfield to Portsmouth.</p> */}
    </div>
  )
}