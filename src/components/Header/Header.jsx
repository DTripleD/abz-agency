import Button from "components/Button/Button";

import css from "./Header.module.scss";

import icons from "src/images/icons.svg";

const Header = () => {
  const scrollIntoView = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <svg className={css.logo}>
          <use href={icons + "#logo"}></use>
        </svg>
        <ul className={css.buttonsList}>
          <li>
            <Button
              text="Users"
              handleFunction={() => scrollIntoView("users")}
            />
          </li>
          <li>
            <Button
              text="Sign up"
              handleFunction={() => scrollIntoView("form")}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
