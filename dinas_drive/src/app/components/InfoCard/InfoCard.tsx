import NextImage, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  elements: { title: string; content: string; link: string }[];
  key: string;
  image?: StaticImageData;
  src?: string;
  className?: string;
}
export default function InfoCard({
  title,
  elements,
  key,
  image,
  src,
  className,
}: CardProps) {
  return (
    <>
      {image && (
        <div
          key={key}
          className={`flex min-h-full w-full flex-col items-center rounded-xl lg:w-1/3 ${className}`}
        >
          <NextImage
            src={image}
            alt={title}
            width="80"
            height="80"
            className="mt-2"
          />
          <div className="mt-2">
            <h1 className="text-center text-2xl font-extrabold">{title}</h1>
            {elements.map((element) => (
              <p className="py-1 text-center text-xl">
                {element.title != "" && `${element.title}: `}{" "}
                <a href={element.link}>{element.content}</a>
              </p>
            ))}
          </div>
        </div>
      )}

      {src && !image && (
        <div
          key={key}
          className={`flex min-h-full w-full flex-col items-center rounded-xl lg:w-1/3 ${className}`}
        >
          <NextImage
            src={src}
            alt={title}
            width="80"
            height="80"
            className="mt-2"
          />
          <div className="mt-2">
            <h1 className="text-center text-2xl font-extrabold">{title}</h1>
            {elements.map((element) => (
              <p className="py-1 text-center text-xl">
                {element.title != "" && `${element.title}: `}{" "}
                <a href={element.link}>{element.content}</a>
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
