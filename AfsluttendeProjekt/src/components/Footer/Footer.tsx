import "./Footer.css";

export const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterLinks">
        <div className="FooterLinkLeftSection">
          <h3>CUSTOMER SERVICE</h3>
          <a href="#">FAQ</a>
          <a href="#">Delivery</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">Contact us</a>
        </div>

        <div className="FooterLinkRightSection">
          <h3>ABOUT AURA</h3>
          <a href="#">About the company</a>
          <a href="#">Job & career</a>
          <a href="#">Newsletter</a>
          <a href="#">Stores</a>
          <a href="#">Responsibility</a>
        </div>
      </div>

      <div className="FooterRightSection">
        <h2>Stay in the Aura.</h2>
        <p>
          Join our newsletter and get <strong>15% off your first order.</strong>
        </p>
        <p>
          Be the first to know about new drops, exclusive offers, and timeless
          minimalist pieces that actually belong in your wardrobe.
        </p>
        <p className="SmallText">
          No spam. No clutter. Just clean style - the Aura way.
        </p>
        <div className="EmailBox">
          <input type="email" placeholder="Your email" />
        </div>
      </div>
    </div>
  );
};
