import Link from "next/link";

export default async function Home() {
  const textBlock1 =
    "Hi, my name is Dina. I own and run Dina's Drive, where I teach people of all ages and experience how to drive!";
  const textBlock2 = "Currently I cover Petersfield to Portsmouth.";
  const textArr = [textBlock1, textBlock2];
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div id="Persona card" className="h-80 w-[90%] pt-4">
        some text
        {/* <Card image={profilePic2} textContent={textArr}/> */}
      </div>
    </div>
  );
}
