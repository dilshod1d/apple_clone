import React from "react";

function Footer() {
  return (
    <footer className="pt-4 bg-tertirary px-32">
      <div className="border-t-2">
        <div className="grid grid-cols-5 my-4">
          <div>
            <h3 className="text-xs font-bold">Shop and Learn</h3>
            <ul className="list-none space-y-3">
              <li className="text-xs">Store</li>
              <li className="text-xs">Mac</li>
              <li className="text-xs">iPad</li>
              <li className="text-xs">iPhone</li>
              <li className="text-xs">Watch</li>
              <li className="text-xs">AirPods</li>
              <li className="text-xs">AirTag</li>
              <li className="text-xs">Accessories</li>
              <li className="text-xs">Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold">Services</h3>
            <ul className="list-none space-y-3">
              <li className="text-xs">Store</li>
              <li className="text-xs">Mac</li>
              <li className="text-xs">iPad</li>
              <li className="text-xs">iPhone</li>
              <li className="text-xs">Watch</li>
              <li className="text-xs">AirPods</li>
              <li className="text-xs">AirTag</li>
              <li className="text-xs">Accessories</li>
              <li className="text-xs">Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3>Apple Store</h3>
            <ul className="list-none space-y-3">
              <li className="text-xs">Store</li>
              <li className="text-xs">Mac</li>
              <li className="text-xs">iPad</li>
              <li className="text-xs">iPhone</li>
              <li className="text-xs">Watch</li>
              <li className="text-xs">AirPods</li>
              <li className="text-xs">AirTag</li>
              <li className="text-xs">Accessories</li>
              <li className="text-xs">Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold">For Business</h3>
            <ul className="list-none space-y-3">
              <li className="text-xs">Store</li>
              <li className="text-xs">Mac</li>
              <li className="text-xs">iPad</li>
              <li className="text-xs">iPhone</li>
              <li className="text-xs">Watch</li>
              <li className="text-xs">AirPods</li>
              <li className="text-xs">AirTag</li>
              <li className="text-xs">Accessories</li>
              <li className="text-xs">Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold">Apple Values</h3>
            <ul className="list-none space-y-3">
              <li className="text-xs">Store</li>
              <li className="text-xs">Mac</li>
              <li className="text-xs">iPad</li>
              <li className="text-xs">iPhone</li>
              <li className="text-xs">Watch</li>
              <li className="text-xs">AirPods</li>
              <li className="text-xs">AirTag</li>
              <li className="text-xs">Accessories</li>
              <li className="text-xs">Gift Cards</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-xs mb-4">
        More ways to shop:{" "}
        <a href="/" className="text-link">
          Find an Apple Store
        </a>{" "}
        or{" "}
        <a href="/" className="text-link">
          other retailer
        </a>{" "}
        near you. Or call 1-800-MY-APPLE.
      </div>
      <div className="w-full border-t-2">
        <div className="flex items-center justify-between">
          <p className="text-xs">
            Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>

          <div className="space-x-4">
            <a href="/" className="border-r pr-2 text-xs">
              Privacy Policy
            </a>
            <a href="/" className="border-r pr-2 text-xs">
              Terms of Use
            </a>
            <a href="/" className="border-r pr-2 text-xs">
              Sales and Refunds
            </a>
            <a href="/" className="border-r pr-2 text-xs">
              Legal
            </a>
            <a href="/" className="border-r pr-2 text-xs">
              Site Map
            </a>
          </div>

          <p className="text-xs">United States</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
