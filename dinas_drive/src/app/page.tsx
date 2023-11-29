import Link from "next/link";
import Card from "./components/ImageCard/ImageCard";
import InfoCard from "./components/InfoCard/InfoCard";
import profilePic2 from "./assets/red-profile-pic.png";
import car from "./assets/car.png";
import contacts from "@/phone-book.png";

export default async function Home() {
  const intro =
    "Hi, my name is Dina. I own and run Dina's Drive, where I teach people of all ages and experience how to drive!";
  const area = "Currently I cover Petersfield to Portsmouth.";
  const profileText = [intro, area];
  const car_info = "The car you could learn in a 2023 VW polo";
  const carText = [car_info];
  return (
    <div className="flex h-full w-full flex-grow flex-col items-center justify-center">
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
      <div
        key="info cards"
        className="px-y min-h-80 flex w-[90%] flex-col lg:flex-row lg:py-4"
      >
        <InfoCard
          key="contact"
          src="/phone-book.png"
          title="Contact"
          className="hidden lg:flex"
          elements={[
            { title: "Phone", content: "07359292583", link: "tel:07359292583" },
            {
              title: "Whatsapp",
              content: "07359292583",
              link: "tel:07359292583",
            },
            {
              title: "Email",
              content: "dina.lincoln@hotmail.com",
              link: "mailto: dina.lincoln@hotmail.com",
            },
          ]}
        />
        <InfoCard
          key="social"
          src="/facebook.png"
          title="Social"
          className="hidden lg:flex"
          elements={[
            {
              title: "",
              content: "Facebook",
              link: "https://www.facebook.com/groups/1164648757636730",
            },
          ]}
        />
      </div>
    </div>
  );
}
