import { useState } from "react";
import { Button } from "../../common";

type NavItemType = {
  title: string;
  path: string;
};

const navItems: NavItemType[] = [
  { title: "Materials & Gradings", path: "#materials" },
  { title: "Logistics & Equipment", path: "#logistics" },
  { title: "Track Record", path: "#track-record" },
  { title: "About Us", path: "#about" },
  { title: "Contact", path: "#contact" },
];

const mobileNavItems: NavItemType[] = [
  { title: "Materials & Gradings", path: "#mobile-materials" },
  { title: "Logistics & Equipment", path: "#mobile-logistics" },
  { title: "Track Record", path: "#mobile-track-record" },
  { title: "About Us", path: "#mobile-about" },
  { title: "Contact", path: "#mobile-contact" },
];

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="w-full lg:absolute xl:absolute top-0 p-4 z-10">
      {/* Desktop */}
      <nav className="w-[80%] mx-auto items-end justify-between px-8 hidden lg:flex xl:flex">
        {/* Logo & Navs */}
        <div className="flex gap-14 items-end">
          {/* Logo placeholder */}
          <img src="/assets/svgs/logo.svg" alt="Logo" className="h-16" />
          <ul className="flex flex-row items-end gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="text-white font-medium text-lg hover:underline cursor-pointer"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get a Quote Button */}
        <div className="pr-14 xl:pr-4">
          <Button type="secondary" label="Get a Quote" />
        </div>
      </nav>

      {/* Mobile */}
      <nav className="w-[95%] mx-auto flex lg:hidden xl:hidden items-center justify-between">
        {/* Logo placeholder */}
        <img src="/assets/svgs/logo.svg" alt="Logo" className="h-16" />

        <button onClick={() => setOpen(true)} className="z-20">
          <img src="/assets/svgs/bars.svg" alt="Bars" className="w-8 h-8" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 transition-opacity duration-300 lg:hidden xl:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bg-[#364C62] min-h-screen w-80 max-w-[85%] p-4 z-40 transform transition-transform duration-300 ease-in-out lg:hidden xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex flex-row items-center justify-between mb-8">
          {/* Logo placeholder */}
          <img src="/assets/svgs/logo.svg" alt="Logo" className="h-16" />

          <button
            onClick={() => setOpen(false)}
            className="p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors"
          >
            <img src="/assets/svgs/times.svg" alt="Times" className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="w-full flex flex-col items-start space-y-2">
          {mobileNavItems.map((item, index) => (
            <li
              key={item.path}
              className={`w-full ${
                index !== navItems.length - 1
                  ? "border-b border-gray-400 border-opacity-30"
                  : ""
              }`}
              onClick={() => setOpen(false)}
            >
              <a
                href={item.path}
                onClick={handleLinkClick}
                className="block w-full text-white font-medium text-lg hover:text-gray-300 cursor-pointer py-4 transition-colors scroll-smooth"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Get a Quote Button */}
        <div className="mt-8 pt-8 border-t border-gray-400 border-opacity-30">
          <Button type="primary" label="Get a Quote" />
        </div>
      </div>
    </header>
  );
};

export default Header;
