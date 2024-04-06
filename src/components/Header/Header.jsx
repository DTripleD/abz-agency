import Button from "components/Button/Button";

import css from "./Header.module.scss";

import icons from "src/images/icons.svg";
import { scrollIntoView } from "src/helpers/scrollIntoView";

const Header = () => {
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
