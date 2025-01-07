import HomeSlider from "../Components/HomeSlider";
import LatestVisa from "../Components/LatestVisa";
import ReviewSection from "../Components/ReviewSection";
import WhyUs from "../Components/WhyUs";

const HomePage = () => {
  return (
    <div className="space-y-3">
      <HomeSlider></HomeSlider>
      <LatestVisa></LatestVisa>
      <WhyUs></WhyUs>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default HomePage;