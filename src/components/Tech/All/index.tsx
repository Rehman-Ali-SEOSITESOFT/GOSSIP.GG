import LatestNews from "@/components/LatestNews/Index";
import AllHeroSection from "./HeroSection";
import AllReviews from "./Reviews";
import TechFecture from "./Feature";
import AllDeail from "./Deails";
const MainTech = () => {
  return (
    <section className="MainTech mt-[-5px] ">
      <AllHeroSection />
      <LatestNews />
      <AllReviews />
      <TechFecture />
      <AllDeail />
    </section>
  );
};

export default MainTech;
