import { Button } from "@/components/ui/button";
import ClientTweetCard from "../magicui/clientTweet";

export async function TweetImages() {
  return (
    <div className="flex justify-around px-16 my-10">
      <ClientTweetCard id="1678577280489234432" className="shadow-2xl" />
      <div className="font-montserrat md:items-start items-center w-full md:w-1/2 py-14 flex flex-col">
        <div className="rounded-full bg-white w-fit flex px-2 py-1 shadow-md">
          <div className="rounded-full md:w-2 md:h-2 w-1 h-1 pt-5 mr-1 bg-green-300"></div>
          <p className="text-sm uppercase text-slate-400">
            Vision for the Future
          </p>
        </div>
        <div className="text-center md:text-start">
          <h1 className="text-4xl py-4">
            Empowering Leaders, Innovating Tomorrow.
          </h1>
          <p className="text-base text-gray-400">
            At [Institute Name], we aim to be a global leader in education,
            known for excellence and impactful research. We empower students to
            become forward-thinking leaders who drive positive change, preparing
            them to meet future challenges with confidence and integrity.
          </p>
        </div>

        <Button
          variant={"secondary"}
          className="mt-8 p-6 shadow-md shadow-cyan-200 hover:drop-shadow-md w-fit"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
