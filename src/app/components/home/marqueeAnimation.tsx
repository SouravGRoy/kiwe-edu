import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "../magicui/marquee";

const reviews = [
    {
        name: "Gaurav Pradhan",
        username: "92.20%",
        body: "St. Joseph's School North Point Darjeeling",
        img: "/images/gourav.png",
    },
    {
        name: "Yash Prasad",
        username: "90.4%",
        body: "Delhi Public School Siliguri",
        img: "/images/yash.png",
    },
    {
        name: "Anshuman Limbu",
        username: "86.75%",
        body: "Vidya Vikash Academy School Darjeeling",
        img: "/images/anshuman.png",
    },
    {
        name: "Ankur Kumar",
        username: "85%",
        body: "Woodridge International School Siliguri",
        img: "/images/ankur.png",
    },
    {
        name: "Ellora Gupta",
        username: "84.5%",
        body: "St. Joseph's High School Siliguri",
        img: "/images/ellora.png",
    },
    {
        name: "Aditya Ghosh",
        username: "94%%",
        body: "Mahbert High School Siliguri",
        img: "/images/aditya.png",
    },
    {
        name: "Shanvi Rauth",
        username: "92%",
        body: "Mahbert High School Siliguri",
        img: "/images/shanvi.png",
    },
    {
        name: "Deepshikha Upadhyay",
        username: "91%%",
        body: "Lincolns High School Siliguri",
        img: "/images/deepshikha.png",
    },
    {
        name: "Prayag Upadhaya ",
        username: "89.6%%",
        body: "Mahbert High School Siliguri",
        img: "/images/prayag.png",
    },
    {
        name: "Lhundup Tshering Lama Khaiba",
        username: "85.7%",
        body: "Goethals Memorial School Kurseong",
        img: "/images/lhundup.png",
    },
    {
        name: "Subh Jaiswal",
        username: "85.4%",
        body: "Birla Divya Jyoti Siliguri",
        img: "/images/subh.png",
    },
    {
        name: "Binayak Chhetri ",
        username: "82.4%",
        body: "Don Bosco School Siliguri",
        img: "/images/binayak.png",
    },
    {
        name: "Koyel Ghosh",
        username: "81.4%",
        body: "Mahbert High School Siliguri",
        img: "/images/koyel.png",
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
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 font-montserrat",
                // light styles
                "border-zinc-900/[.1] bg-zinc-950/[.01] hover:bg-zinc-950/[.05]",
                // dark styles
                "shadow-md dark:hover:bg-gray-50/[.15]"
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
                    <figcaption className="text-sm font-medium text-tertiary">
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
            <div className="flex flex-col items-center justify-center font-montserrat">
                <div className="mb-6 flex items-center justify-center rounded-full bg-white px-2 py-1 shadow-md">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-300"></div>
                    <p className="text-base font-semibold text-slate-400">
                        DNAtoms
                    </p>
                </div>
                <h1 className="mb-4 text-center text-4xl leading-none tracking-tight text-zinc-900 md:text-4xl lg:text-4xl">
                    Testimonials
                </h1>
                <p className="w-3/4 text-center text-lg font-normal text-gray-500 sm:px-16 lg:text-base xl:px-48 dark:text-gray-400">
                    Discover how our commitment to excellence and personalized
                    support sets us apart, helping you reach your full potential
                    in a thriving learning environment.
                </p>
            </div>
            <div className="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-12 md:shadow-xl">
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
                <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
                <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
            </div>
        </div>
    );
};

export default MarqueeAnimation;
