import { FcSearch } from "react-icons/fc";

import ApiContext from "../context/ApiContext";
import { useContext, useState } from "react";
import LOGO from "../../assets/picture/logo.png";
import "./navbar.css";
const Navbar = () => {
  const context = useContext(ApiContext);
  const [searchPlaceHolder, setSearchPlaceHolder] = useState("Search");

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    context.i18n.changeLanguage(languageValue);

    if (languageValue === "fa") {
      setSearchPlaceHolder("खोजें");
    } else if (languageValue === "en") {
      setSearchPlaceHolder("Search");
    }
  };

  function changeSearchValue(e) {
    const input = e.currentTarget;
    context.setSearchValue(input.value);
  }
  return (
    <>
      <nav className="navbar ">
        <ul className="w-100 d-flex align-items-center justify-content-between">
          <li>
            <h2 className="m-0">
              <img src={LOGO} alt="logo" className="w-50" />
            </h2>
          </li>
          <li className="search_box">
            <FcSearch />
            <input
              placeholder={searchPlaceHolder}
              onChange={changeSearchValue}
              value={context.searchValue}
            />
          </li>

          <div className="d-flex">
            {/* toggle Language */}
            <select
              className="mx-lg-3 toggleLanguage"
              onChange={changeLanguageHandler}
            >
              <option value="en">English </option>
              <option value="fa">हिंदी </option>
            </select>
            {/* toggle Language */}

            {/* toggle Theme */}
            <div className="toggleTheme mx-3 mt-2">
              <input
                id="change"
                type="checkbox"
                onChange={context.toggleTheme}
                // checked={context.theme === "dark"}
              />
              <label htmlFor="change"></label>
            </div>
            {/* toggle Theme */}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
