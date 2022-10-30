import React from "react";
import { BsApple, BsSearch, BsBag } from "react-icons/bs";

function NavBar() {
  return (
    <nav className="h-12 w-screen bg-primary fixed top-0 left-0 z-10">
      <div className="w-full h-full flex items-center justify-center">
        <ul className="flex justify-between w-9/12">
          <li>
            <a href="/">
              <BsApple
                size="15"
                className="text-secondary hover:text-tertirary"
              />
            </a>
          </li>
          <li className="text-secondary hover:text-tertirary text-xs">
            <a href="/store">Store</a>
          </li>
          <li className="text-secondary hover:text-tertirary text-xs">
            <a href="/mac">Mac</a>
          </li>
          <li className="text-secondary hover:text-tertirary text-xs">
            <a href="/ipad">Ipad</a>
          </li>
          <li className="text-secondary hover:text-tertirary text-xs">
            <a href="/iphone">Iphone</a>
          </li>
          <li className="text-secondary hover:text-tertirary text-xs">
            <a href="/watch">Watch</a>
          </li>
          <li className="text-secondary hover:text-tertirary text-xs">
            <a href="/airpods">AirPods</a>
          </li>
          <li className="text-secondary hover:text-tertirary text-xs">
            <a href="/tv&home">TV & Home</a>
          </li>
          <li className="text-secondary hover:text-tertirary text-xs">
            <a href="/only-on-apple">Only on Apple</a>
          </li>
          <li className="text-secondary hover:text-tertirary text-xs">
            <a href="/accessories">Accessories</a>
          </li>
          <li>
            <a href="/">
              <BsSearch
                size="15"
                className="text-secondary hover:text-tertirary"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <BsBag
                size="15"
                className="text-secondary hover:text-tertirary"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
