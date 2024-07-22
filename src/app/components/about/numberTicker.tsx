import NumberTicker from "../magicui/number-ticker";

const NumberTickerDemo = () => {
  return (
    <div className="flex justify-around md:flex-row flex-col font-montserrat md:p-20 p-10 md:mt-8 ">
      <div className="text-center mb-4">
        <p className="whitespace-pre-wrap md:text-5xl  text-4xl font-bold tracking-tighter text-blue-600">
          <NumberTicker value={350} />
        </p>
        <p className="md:text-base text-sm mt-2 font-medium tracking-tighter text-black ">
          STUDENTS TAUGHT
        </p>
      </div>
      <div className="text-center mb-4">
        <p className="whitespace-pre-wrap md:text-5xl text-4xl font-bold tracking-tighter text-blue-600">
          <NumberTicker value={100} /> %
        </p>
        <p className="md:text-base text-sm mt-2 font-medium tracking-tighter text-black ">
          SATISFACTION RATE
        </p>
      </div>
      <div className="text-center mb-4">
        <p className="whitespace-pre-wrap md:text-5xl text-4xl font-bold tracking-tighter text-blue-600">
          <NumberTicker value={656} />
        </p>
        <p className="md:text-base text-sm mt-2 font-medium tracking-tighter text-black ">
          ONLINE SESSIONS
        </p>
      </div>
      <div className="text-center">
        <p className="whitespace-pre-wrap md:text-5xl text-4xl font-bold tracking-tighter text-blue-600">
          <NumberTicker value={10} />+
        </p>
        <p className="md:text-base text-sm mt-2 font-medium tracking-tighter text-black ">
          UNIQUE COURSES
        </p>
      </div>
    </div>
  );
};

export default NumberTickerDemo;
