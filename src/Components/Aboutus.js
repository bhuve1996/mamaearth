function Aboutus() {
  return <>
    <section>
        <div className="me-banner">
          <div className="me-aboutus-left">
          <div className="me-aboutus-left-inner-container">
          {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSep02FE82d4gAX79YAS6CEQ5soLJiX_VCq98rHo5fHzylJ-KA/viewform?embedded=true" max-width="640" max-height="650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
          <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSep02FE82d4gAX79YAS6CEQ5soLJiX_VCq98rHo5fHzylJ-KA/formResponse"
        method="post">
        <label htmlFor="me-name">Name :</label>
        <div>
        <input type="text" placeholder="Name*" name="entry.2005620554" required/></div>
        
        <label htmlFor="me-email">Email Address :</label>
        <div>
        <input type="email" placeholder="Email address*" name="entry.1045781291" required/></div>
        
        <label htmlFor="me-address">Address :</label>
        <div>
        <input type="text" placeholder="Address" name="entry.1065046570"/>
        </div>
        
        <label htmlFor="me-phone">Phone No :</label>
        <div>
        <input type="text" placeholder="Phone No" name="entry.1166974658"/></div>
        
        <label htmlFor="me-comments">Comments :</label>
        <div>
        <input type="text" placeholder="Comments" name="entry.839337160"/>
        </div>
        
       {/* <label>Message*</label>
        <textarea rows="5" placeholder="Message*" name="entry.1166974658" required></textarea>  */}

        <button type="submit" className="me-btn-form">Send</button>
    </form>
              
            </div>

            
          </div>
          <div className="me-aboutus-right">
            
            <div className="me-aboutus-right-inner-container">
              <h2>Our Goodness Promise</h2>
              
              <p>At Mamaearth, we live to spread a little love and goodness every day. We believe that goodness isn't a superpower, nor a special gift, it's inside all of us and it shows in the little choices we make. Our mission is to bring you the best of nature through our purest and most nurturing products that are made without any toxins or harmful chemicals. </p>

              <button className="button button-home-banner">SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>
  </>;
}

export default Aboutus;
