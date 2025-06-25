import { Link } from "react-router";
import { Button } from "../../common";

type NavItemType = {
  title: string;
  path: string;
};

const navItems: NavItemType[] = [
  { title: "Materials & Gradings", path: "/materials-gradings" },
  { title: "Logistics & Equipment", path: "/logistics-equipment" },
  { title: "Track Record", path: "/track-record" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <header className="w-full fixed top-0 p-4 z-10">
      <nav className="w-[80%] mx-auto flex items-end justify-between px-8">
        {/* Logo & Navs */}
        <div className="flex gap-14 items-end">
          <img src="/assets/svgs/logo.svg" alt="Logo" className="h-20" />
          <ul className="flex flex-row items-end gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className=" text-white font-medium text-lg hover:underline cursor-pointer"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get a Quote Button */}
        <div className="pr-14">
          <Button type="secondary" label="Get a Quote" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
