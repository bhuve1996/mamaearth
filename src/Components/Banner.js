import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Banner() {
  const responsive = {
    desktop: {
      breakpoint: { max: 6000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <>
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div className="me-banner"><img id="mebanner1" src="images/me-banner-main-pc.gif" /> <img id="mebanner2" src="images/me-banner-main-mob.gif" /></div>
  <div className="me-banner"><img id="mebanner1" src="images/me-banner-main-pc.gif" /> <img id="mebanner2" src="images/me-banner-main-mob.gif" /></div>
  <div className="me-banner"><img id="mebanner1" src="images/me-banner-main-pc.gif" /> <img id="mebanner2" src="images/me-banner-main-mob.gif" /></div>
</Carousel>
      
        {/* <div className="me-banner">
          <div className="me-banner-left">
            <div className="me-banner-left-inner-container">
              <h2>Goodness Inside' is a promise.</h2>
              <h3>Right for our consumers.</h3>

              <p>Staying loyal to our product roots of toxin free purity</p>

              <button className="button button-home-banner">SHOP NOW</button>
            </div>        
          </div>
          <div className="me-banner-right">
            <img src="images/banner_2.png" />
          </div>
        </div> */}

        {/* <div className="me-banner">
          
          <img id="mebanner1" src="images/me-banner-main-pc.gif" />
          <img id="mebanner2" src="images/me-banner-main-mob.gif" />
        </div>  */}
      
    </>
  )
}

export default Banner;
