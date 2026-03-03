import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a className="font-medium">Home</a>
      </li>
      <li>
        <a className="font-medium">FAQ</a>
      </li>
      <li>
        <a className="font-medium">Changelog</a>
      </li>
      <li>
        <a className="font-medium">Blog</a>
      </li>
      <li>
        <a className="font-medium">Download</a>
      </li>
      <li>
        <a className="font-medium">Contact</a>
      </li>
    </>
  );

  return (
    <header className="font-inter border-b border-b-[#E9E9E9]">
      <nav className="navbar container w-11/12 mx-auto px-0">
        <div className="navbar-start w-full md:w-1/2">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <a className="text-sm md:text-xl lg:text-2xl font-bold tracking-tight">
            CS — Ticket System
          </a>
        </div>

        <div className="navbar-end w-full">
          <ul className="menu menu-horizontal hidden md:flex pr-4 gap-2">
            {navLinks}
          </ul>
          <button
            className="btn border-none px-4 py-3 rounded-sm text-white font-semibold
                        bg-linear-to-r
                        from-[#632EE3]
                        to-[#9F62F2]
                        hover:from-[#5325c4]
                        hover:to-[#8c52dc]
                        transition-all duration-300"
          >
            <FaPlus /> New Ticket
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
