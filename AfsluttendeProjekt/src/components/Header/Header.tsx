import "./Header.css";
import CartImage from "../../assets/shopping_cart_24dp_866142_FILL0_wght400_GRAD0_opsz24.svg";

export const Header = () => {
  return (
    <div className="header">
      <a href="/" className="MainTitle Centered DefHref">
        aura<a style={{ color: "#6d1e26" }}>//</a>edit
      </a>
      <div className="CartIcon">
        <a href="#cart">
          <img className="CartImage" alt="Cart" src={CartImage}></img>
        </a>
      </div>
    </div>
  );
};
