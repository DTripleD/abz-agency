import Button from "components/Button/Button";

import css from "./HeroSection.module.scss";
import { scrollIntoView } from "src/helpers/scrollIntoView";

const HeroSection = () => {
  return (
    <section className={`${css.heroSection}`}>
      <div className={`${css.container} ${css.heroContainer}`}>
        <div className={css.heroTextWrapper}>
          <h1 className={`${css.title} ${css.hero}`}>
            Test assignment for front-end developer
          </h1>
          <p className={css.heroText}>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they{"'"}ll be building web interfaces with
            accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </p>
        </div>
        <Button text="Sign up" handleFunction={() => scrollIntoView("form")} />
      </div>
    </section>
  );
};

export default HeroSection;
