import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Card from '../components/Card/Card'
import profilePic2 from '../assets/red-profile-pic.png'

export default function Home() {
  const textBlock1 = "Hi, my name is Dina. I own and run Dina's Drive, where I teach people of all ages and experience how to drive!"
  const textBlock2 = "Currently I cover Petersfield to Portsmouth."
  const textArr = [textBlock1, textBlock2]
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div id="Persona card" className="w-[90%] h-80 pt-4">
        <Card image={profilePic2} textContent={textArr}/>
      </div>
    </div>
  )
}
