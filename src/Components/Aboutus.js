import "./form.css";

function Aboutus() {
  return (
    <>
      <section>
        <div className="me-aboutus">
          <div className="me-aboutus-left">
            <div className="me-aboutus-left-inner-container">
              <div className="me-form-header"><h2>Submit your Entry</h2></div>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSep02FE82d4gAX79YAS6CEQ5soLJiX_VCq98rHo5fHzylJ-KA/formResponse"
                method="post"
              >
                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.2005620554"
                    autoComplete="off"
                    required
                  />
                  <label>Name*</label>
                </div>

                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.1045781291"
                    autoComplete="off"
                    required
                  />
                  <label>Email Address*</label>
                </div>

                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.1065046570"
                    autoComplete="off"
                    required
                  />
                  <label>Address</label>
                </div>
                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.1166974658"
                    autoComplete="off"
                    required
                  />
                  <label>Phone No</label>
                </div>

                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.839337160"
                    autoComplete="off"
                    required
                  />
                  <label>Comments</label>
                </div>

                {/* <label>Message*</label>
        <textarea rows="5" placeholder="Message*" name="entry.1166974658" required></textarea>  */}

                <button type="submit" className="me-btn-form">
                  Send
                </button>
              </form>
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
            <img className="me-aboutus-img" src="images/Infographics.jpg"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
