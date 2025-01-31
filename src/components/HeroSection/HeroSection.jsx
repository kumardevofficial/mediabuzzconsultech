import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 W-[90%] m-auto">
        <HeroLeft />
        <HeroRight />
      </div>
    </>
  );
};
export default HeroSection;
