function Banner() {
  return (
    <>
      <section>
        <div className="me-banner">
          <div className="me-banner-left">
            <div className="me-banner-left-inner-container">
              <h2>Goodness Inside' is a promise.</h2>
              <h3>Right for our consumers.</h3>

              <p>Staying loyal to our product roots of toxin free purity</p>

              <button className="button button-home-banner">SHOP NOW</button>
            </div>

            {/* <div className="me-svg-container">
          <div className="me-svg-inner-container">
          <svg
                className="bg-wave"
                width="247"
                height="4293"
                viewBox="0 -4293 247 4293"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M961.781 169.477L1617.94 236.672C1685 243.54 1752.59 243.54 1819.65 236.672L2475.8 169.477C2542.87 162.609 2610.45 162.609 2677.52 169.477L3347.13 238.051C3405.24 244.002 3463.81 244.002 3521.92 238.051L4134.08 175.362C4224.01 166.152 4292.4 90.403 4292.4 0.000595093L-2.15935e-05 0.000375253L3.05615 247.001L760.068 169.477C827.13 162.609 894.718 162.609 961.781 169.477Z"
                  fill="white"
                
                />
              </svg>
          </div>
            </div> */}
          </div>
          <div className="me-banner-right">
            <img src="images/banner_2.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
