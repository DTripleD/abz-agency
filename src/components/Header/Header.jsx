import Button from "components/Button/Button";

import css from "./Header.module.scss";

import icons from "src/images/icons.svg";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <svg className={css.logo}>
          <use href={icons + "#logo"}></use>
        </svg>
        <ul className={css.buttonsList}>
          <li>
            <Button text="Users" />
          </li>
          <li>
            <Button text="Sign up" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
