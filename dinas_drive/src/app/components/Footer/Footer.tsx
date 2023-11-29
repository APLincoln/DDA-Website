import Image from "next/image";
export default function Footer() {
  return (
    <footer className="flex h-32 w-full flex-col">
      <div className="flex h-full w-full">
        <a
          href="tel: 07359292583"
          className="flex h-full w-1/3 items-center justify-center"
        >
          <Image
            alt="phone number"
            src="/receiver.png"
            height="80"
            width="80"
            className="h-20 w-20"
          />
        </a>
        <a
          href="mailto: dina.lincoln@hotmail.com"
          className="flex h-full w-1/3 items-center justify-center"
        >
          <Image
            alt="email"
            src="/email.png"
            height="80"
            width="80"
            className="h-20 w-20"
          />
        </a>
        <a
          href="https://www.facebook.com/groups/1164648757636730"
          className="flex h-full w-1/3 items-center justify-center"
        >
          <Image
            alt="facebook"
            src="/facebook.png"
            height="80"
            width="80"
            className="h-20 w-20"
          />
        </a>
      </div>
      <p className="pr-4 text-right font-sans text-xs font-normal">
        APL Development
      </p>
    </footer>
  );
}
