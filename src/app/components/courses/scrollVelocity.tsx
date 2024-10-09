import { VelocityScroll } from "../magicui/velocity-scroll-props";

export function ScrollBasedVelocityDemo() {
    return (
        <VelocityScroll
            text="DnAtoms"
            default_velocity={5}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-primary drop-shadow-sm md:text-7xl md:leading-[5rem]"
        />
    );
}
