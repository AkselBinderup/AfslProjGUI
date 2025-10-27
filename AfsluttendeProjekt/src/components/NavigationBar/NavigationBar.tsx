import './NavigationBar.css';

export const NavigationBar = () => {
  return (
    <>
      <nav className="NavBarItems Capitalize-First">
        <ul>
          <li>
            <a href="#AllProducts">All products</a>
          </li>
          <li>
            <a href="#Jackets">Jackets</a>
          </li>
          <li>
            <a href="#Tops">Tops</a>
          </li>
          <li>
            <a href="#Pants">Pants</a>
          </li>
          <li>
            <a href="#Shoes">Shoes</a>
          </li>
          <li>
            <a href="#Accessories">Accessories</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
