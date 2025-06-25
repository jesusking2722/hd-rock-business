const Header = () => {
  return (
    <header className="w-full fixed top-0 p-4">
      <nav className="w-[80%] mx-auto flex flex-row items-end gap-10">
        <img src="/assets/svgs/logo.svg" alt="Logo" className="h-20" />
        <ul className="w-full flex flex-row items-center">
          <li>Materials & Gradings</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
