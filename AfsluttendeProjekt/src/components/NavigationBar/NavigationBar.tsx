import { Link } from "react-router-dom";
import "./NavigationBar.css";

export const NavigationBar = () => {
  return (
    <nav className="NavBarItems Capitalize-First">
      <ul>
        <li>
          <Link to="/allproducts">All Products</Link>
        </li>
        <li>
          <Link to="/accessories">Accessories</Link>
        </li>
        <li>
          <Link to="/jackets">Jackets</Link>
        </li>
        <li>
          <Link to="/pants">Pants</Link>
        </li>
        <li>
          <Link to="/tops">Tops</Link>
        </li>
      </ul>
    </nav>
  );
};
