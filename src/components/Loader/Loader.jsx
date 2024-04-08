import css from "./Loader.module.scss";

import icons from "src/images/icons.svg";

const Loader = () => {
  return (
    <svg className={css.loader}>
      <use href={icons + "#preloader"}></use>
    </svg>
  );
};

export default Loader;
