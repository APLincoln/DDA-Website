import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card/Card'

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div label="Persona card" className="w-[90%] h-80 pt-4">
        <Card/>
      </div>
    </div>
  )
}
