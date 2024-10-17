import { Button } from "@/components/ui/button";
import Link from "next/link";
import ClientTweetCard from "../magicui/clientTweet";

export async function TweetImages() {
    return (
        <div className="my-10 flex justify-around px-10 md:px-16">
            <ClientTweetCard id="1678577280489234432" className="shadow-2xl" />
            <div className="hidden w-full flex-col items-center py-14 font-montserrat md:flex md:w-1/2 md:items-start">
                <div className="flex w-fit rounded-full bg-white px-2 py-1 shadow-md">
                    <div className="mr-1 h-1 w-1 rounded-full bg-green-300 pt-5 md:h-2 md:w-2"></div>
                    <p className="text-sm uppercase text-slate-400">
                        Vision for the Future
                    </p>
                </div>
                <div className="text-center md:text-start">
                    <h1 className="py-4 text-4xl">
                        Empowering Leaders, Innovating Tomorrow.
                    </h1>
                    <p className="text-base text-gray-400">
                        At DNAtoms, we aim to be a global leader in education,
                        known for excellence and impactful research. We empower
                        students to become forward-thinking leaders who drive
                        positive change, preparing them to meet future
                        challenges with confidence and integrity.
                    </p>
                </div>
                <Link href={"/aboutUs"}>
                    <Button
                        variant={"secondary"}
                        className="mt-8 w-fit p-6 shadow-md shadow-cyan-200 hover:drop-shadow-md"
                    >
                        Learn More
                    </Button>
                </Link>
            </div>
        </div>
    );
}
