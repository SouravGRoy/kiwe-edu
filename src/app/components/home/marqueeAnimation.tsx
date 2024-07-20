import { cn } from "@/lib/utils";
import Marquee from "../magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer font-montserrat overflow-hidden rounded-xl border p-4",
        // light styles
        "border-zinc-900/[.1] bg-zinc-950/[.01] hover:bg-zinc-950/[.05]",
        // dark styles
        " dark:hover:bg-gray-50/[.15] shadow-md"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={"image"}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm text-tertiary font-medium ">
            {name}
          </figcaption>
          <p className="text-xs font-medium">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeAnimation = () => {
  return (
    <div className="border py-10">
      <div className="flex flex-col font-montserrat   justify-center items-center">
        <div className="rounded-full bg-white mb-6 flex items-center justify-center shadow-md px-2 py-1">
          <div className="rounded-full w-2 h-2 bg-green-300 mr-2"></div>
          <p className="text-base text-slate-400 font-semibold">Kiwe Edu</p>
        </div>
        <h1 className="mb-4 text-4xl text-center   leading-none tracking-tight font-semibold text-zinc-900 md:text-4xl lg:text-4xl ">
          Why US ?
        </h1>
        <p className=" text-lg w-3/4 text-center font-normal text-gray-500 lg:text-base sm:px-16 xl:px-48 dark:text-gray-400">
          Experience visionary education tailored to unleash your potential and
          prepare you for a dynamic future at Visionary Institute.
        </p>
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-12 md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default MarqueeAnimation;
