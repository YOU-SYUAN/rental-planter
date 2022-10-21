import { HamBarIcon } from "../components/icons/NavIcons";
import { useState } from "react";
import logo from "../assets/logo.png";

const NavBar = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const navAddLogout = (navItems) => {
    const items = [...navItems];
    items.push({
      title: "登出",
      onClick: logout,
      icon: (
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    });
    return items.map((x) => ({
      title: x.title,
      onClick: () => {
        x.onClick();
        setMobileMenuOpen(!mobileMenuOpen);
      },
      icon: x.icon
    }));
  };

  return (
    <nav className="w-full flex items-center justify-center border-b fixed bg-white z-50 desktop:h-24 tablet:h-20 h-16">
      <div className="container w-full desktop:max-w-[1560px] tablet:max-w-[768px] desktop:px-[140px] tablet:px-9 px-4 flex flex-wrap justify-between items-center relative">
        <button onClick={props.onLogoClick} className="h-full">
          <img src={logo} alt="Logo" />
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="inline-flex justify-end items-center text-sm text-gray-500 rounded-lg desktop:hidden tablet:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <HamBarIcon className="w-6 h-6" />
        </button>

        <div className="hidden desktop:flex tablet:flex justify-center items-center  desktop:text-[20px] tablet:text-[16px] gap-8">
          {props.navItems.map((item) => (
            <button onClick={item.onClick} key={item.title}>
              {item.title}
            </button>
          ))}
        </div>
        <button
          onClick={logout}
          className="bg-[#8B8B8B] text-white w-[56px] h-10 rounded-lg hidden desktop:block tablet:block"
        >
          登出
        </button>
      </div>

      <div
        className={`absolute desktop:top-24 tablet:top-20 top-16 left-0 bg-white p-4 w-full desktop:hidden tablet:hidden ${
          mobileMenuOpen ? "flex" : "hidden"
        }`}
        id="mobile-menu"
      >
        <ul className="w-full flex flex-col gap-2">
          {navAddLogout(props.navItems).map((item) => (
            <li key={item.title}>
              <button
                onClick={item.onClick}
                className="w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                {item.icon}
                <span className="ml-3">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export { NavBar };
