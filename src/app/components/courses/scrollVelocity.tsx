import { VelocityScroll } from "../magicui/velocity-scroll-props";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Kiwe Edu"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm text-primary md:text-7xl md:leading-[5rem]"
    />
  );
}
