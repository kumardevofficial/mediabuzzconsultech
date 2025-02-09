import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import ImageSlider from "./components/ImageSlider/ImageSlider";
// import MultiStagePopup from "./components/PopUp/PopUP";
import QueryForm from "./components/PopUp/PopUP";
import HeroSection from "./components/HeroSection/HeroSection";
import CustomerReviews from "./components/CustomerReview/CustomerReview";
import WhyChooseMediaJenie from "./components/WhyChoose/WhyChoose";
import ContentServiceSection from "./components/ServiceSection/FirstService";
import FirstService from "./components/ServiceSection/FirstService";
import SecondService from "./components/ServiceSection/SecondService";
import ThirdSection from "./components/ServiceSection/ThirdSection";
import FourthSection from "./components/ServiceSection/FourthSection";

export default function App() {
  const [popupVisiblity, setPopupVisiblity] = useState(false);
  return (
    <>
      <HeaderMenu pupUpToggle={{ popupVisiblity, setPopupVisiblity }} />
      <HeroSection pupUpToggle={{ popupVisiblity, setPopupVisiblity }} />
      <WhyChooseMediaJenie />
      <CustomerReviews />
      <div>
        <FirstService pupUpToggle={{ popupVisiblity, setPopupVisiblity }} />
        <SecondService pupUpToggle={{ popupVisiblity, setPopupVisiblity }} />
        <ThirdSection pupUpToggle={{ popupVisiblity, setPopupVisiblity }} />
        <FourthSection pupUpToggle={{ popupVisiblity, setPopupVisiblity }} />
      </div>
      {/* <ImageSlider /> */}
      <Footer />
      {/* <MultiStagePopup pupUpToggle={{ popupVisiblity, setPopupVisiblity }} /> */}
      <QueryForm pupUpToggle={{ popupVisiblity, setPopupVisiblity }} />
    </>
  );
}
