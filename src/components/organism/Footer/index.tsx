import { Link } from "react-router";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#010918] py-4">
      {/* Desktop */}
      <div className="w-[70%] px-10 mx-auto flex-row items-center justify-between xl:flex lg:flex hidden">
        <span className="text-white font-normal text-base">
          © {year} HD ROCK.
        </span>
        <img src="/assets/svgs/logo.svg" alt="Logo" className="w-16 h-auto" />
        <ul className="flex flex-row items-center gap-6">
          <li>
            <Link
              to="#"
              className="text-white font-normal text-base hover:underline"
            >
              Privacy policy
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-white font-normal text-base hover:underline"
            >
              Terms of use
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="w-full flex-col items-center justify-center gap-4 lg:hidden xl:hidden flex">
        <img src="/assets/svgs/logo.svg" alt="Logo" className="w-16 h-auto" />
        <span className="text-white font-normal text-base">
          © {year} HD ROCK.
        </span>
        <ul className="flex flex-row items-center gap-6">
          <li>
            <Link
              to="#"
              className="text-white font-normal text-base hover:underline"
            >
              Privacy policy
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-white font-normal text-base hover:underline"
            >
              Terms of use
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
