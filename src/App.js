import "./App.css";
import Aboutus from "./Components/Aboutus";
import Banner from "./Components/Banner";
import BannerAd from "./Components/BannerBottomAd";
import Whyus from "./Components/Whyus";

function App() {
  return (
    <>
      <div className="me-home">
        <div className="me-container">
          <div className="me-banner-container">
            <Banner />
          </div>
          <div className="me-banner-ad-container">
            <BannerAd />
          </div>
          <div className="me-aboutus-container">
            <Aboutus />
          </div>
          <div className="me-whyus-container">
            <Whyus />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
