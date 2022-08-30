import "./form.css";

function Aboutus() {
  return (
    <>
      <section>
        <div className="me-aboutus">
          <div className="me-aboutus-left">
            <div className="me-aboutus-left-inner-container">
              <div className="me-form-header">
                <h2>Submit your Entry</h2>
              </div>
              <div id="containerIframe">
  
 
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdsH1_xeEBRhfOJ0mKpF0ljK0rpbA8WdN2M5-c5d9aqDIb2pQ/viewform?embedded=true"   frameborder="0" marginheight="0" marginwidth="0"
     
              >Loading…</iframe>
                 </div>
              {/* <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSdsH1_xeEBRhfOJ0mKpF0ljK0rpbA8WdN2M5-c5d9aqDIb2pQ/formResponse"
                method="post"
              >
                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.71797510"
                    autoComplete="off"
                    required
                  />
                  <label>Name*</label>
                </div>
                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.893390289"
                    autoComplete="off"
                    required
                  />
                  <label>Contact Number*</label>
                </div>
                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="emailAddress"
                    autoComplete="off"
                    required
                  />
                  <label>Email*</label>
                </div>

                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.881328227"
                    autoComplete="off"
                    
                  />
                  <label>Wedding Date*</label>
                </div>
                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.881328227"
                    autoComplete="off"
                    required
                  />
                  <label>Address*</label>
                </div>
                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.141546762"
                    autoComplete="off"
                    required
                  />
                  <label>
                    Tell us about a #ShaadiWalaGlow moment with your partner? *
                  </label>
                </div>

                <button type="submit" className="me-btn-form">
                  Send
                </button>
              </form> */}
            </div>
          </div>

          <div className="me-aboutus-right">
            {/* <div className="me-aboutus-right-inner-container">
              <h2>Our Goodness Promise</h2>

              <p>
                At Mamaearth, we live to spread a little love and goodness every
                day. We believe that goodness isn't a superpower, nor a special
                gift, it's inside all of us and it shows in the little choices
                we make. Our mission is to bring you the best of nature through
                our purest and most nurturing products that are made without any
                toxins or harmful chemicals.{" "}
              </p>

              <button className="me-btn-form">SHOP NOW</button>
            </div> */}
            <img className="me-aboutus-img" src="images/Infographics.jpg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
