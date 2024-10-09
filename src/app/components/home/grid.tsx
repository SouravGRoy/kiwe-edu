"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../magicui/animated-grid-pattern";

const AnimatedGridPatternDemo = () => {
  return (
    <div className="relative flex h-full w-full max-w-[36rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-28 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center md:text-5xl text-3xl font-medium tracking-tighter text-secondary">
        DNAtoms
      </p>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%]  skew-y-12"
        )}
      />
    </div>
  );
};

export default AnimatedGridPatternDemo;
