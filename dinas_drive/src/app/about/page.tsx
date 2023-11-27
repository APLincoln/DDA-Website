import Link from "next/link";
import Card from "../components/ImageCard/ImageCard";
import profilePic2 from "../assets/red-profile-pic.png";
import car from "../assets/car.png";

export default function About() {
  const intro =
    "Hi, my name is Dina. I own and run Dina's Drive, where I teach people of all ages and experience how to drive!";
  const area = "Currently I cover Petersfield to Portsmouth.";
  const profileText = [intro, area];
  const car_info = "The car you could learn in a 2023 VW polo";
  const carText = [car_info];
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div id="Persona card" className="h-80 w-[90%] pt-4">
        <Card
          image={profilePic2}
          textContent={profileText}
          rounded={true}
          reversed={true}
        />
      </div>
      <div id="Persona card" className="h-80 w-[90%] pt-4">
        <Card
          image={car}
          textContent={carText}
          rounded={true}
          reversed={false}
        />
      </div>
    </div>
  );
}
