import css from "./Header.module.scss";
import Button from "components/Button/Button";

import icons from "/images/icons.svg";
import { scrollIntoView } from "src/helpers/scrollIntoView";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={`${css.container} ${css.headerContainer}`}>
        <svg
          className={css.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
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
