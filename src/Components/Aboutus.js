import ContactForm from "./ContactForm";
import ContactFormNew from "./ContactFormNew";
import IframeResizer from 'iframe-resizer-react'
import React ,{useState,useEffect}from "react";
function Aboutus() {
  // const [frameHeight, setFrameHeight] = useState();


 
  // useEffect(() => {
  //   const frame = document.getElementById("myFrame");
  //   console.log(
  //     "height",
  //     frame.contentWindow.document.body.scrollHeight + "px"
  //   );

  //   setTimeout(() => {
  //     setFrameHeight(frame.contentWindow.document.body.scrollHeight + "px");
  //   }, 100);
  // }, []);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const iframeNew = document.getElementById('myFrame')
  //     console.log(iframeNew.contentWindow.document)
  //     // console.log(iframeNew?.contentDocument)
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      <section>
        <div className="me-banner">
          <div className="me-banner-left">
            <div className="me-aboutus-left-inner-container">
              {/* <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSep02FE82d4gAX79YAS6CEQ5soLJiX_VCq98rHo5fHzylJ-KA/viewform?embedded=true"
                id="myFrame"
                width="100%" 
                height="1100px"
                frameBorder="0"
                scrolling="no"
              >
                Loading…
              </iframe> */}
              {/* <ContactForm /> */}
              <ContactFormNew/>
            </div>
          </div>
          <div className="me-banner-right">
            <div className="me-aboutus-right-inner-container">
              <h2>Our Goodness Promise</h2>

              <p>
                At Mamaearth, we live to spread a little love and goodness every
                day. We believe that goodness isn't a superpower, nor a special
                gift, it's inside all of us and it shows in the little choices
                we make. Our mission is to bring you the best of nature through
                our purest and most nurturing products that are made without any
                toxins or harmful chemicals.{" "}
              </p>

              <button className="button button-home-banner">SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
