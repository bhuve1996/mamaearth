import "./form.css"

function Aboutus() {
  return (
    <>
      <section>
        <div className="me-aboutus">
          <div className="me-aboutus-left">
            <div className="me-aboutus-left-inner-container">
              
              <div className="me-form-header">Contact Us</div>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSep02FE82d4gAX79YAS6CEQ5soLJiX_VCq98rHo5fHzylJ-KA/formResponse"
                method="post"
              >
                
                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.2005620554"
                    required
                  />
                  <label htmlFor="me-name">Name :</label>
                </div>

                
                <div className="text-field">
                  <input
                    type="email"
                    placeholder=""
                    name="entry.1045781291"
                    required
                  />
                  <label htmlFor="me-email">Email Address*</label>
                </div>

                
                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.1065046570"
                  />
                  <label htmlFor="me-address">Address :</label>
                </div>

                
                <div className="text-field">
                  <input
                    type="text"
                    placeholder=""
                    name="entry.1166974658"
                  />
                  <label htmlFor="me-phone">Phone No</label>
                </div>

                
                <div className="text-field">
                
                  <input
                    type="text"
                    placeholder=""
                    name="entry.839337160"
                  />
                  <label htmlFor="me-comments">Comments</label>
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

              <button className="button">SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
