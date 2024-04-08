import PropTypes from "prop-types";

import css from "./RadioField.module.scss";
import { validatePosition } from "src/validation/validation";
import { selectPositions } from "src/redux/positions/positionsSelectors";
import { useSelector } from "react-redux";
import RadioItem from "./RadioItem/RadioItem";

const RadioField = ({ setFieldValue }) => {
  const positions = useSelector(selectPositions);
  return (
    <div className={css.radioBlock}>
      <p className={css.radioTitle}>Select your position </p>
      <ul className={css.positionsList}>
        {positions &&
          positions.map((item) => (
            <RadioItem
              key={item.id}
              position={item.name}
              position_id={item.id}
              setFieldValue={setFieldValue}
              validate={validatePosition}
              required
            />
          ))}
      </ul>
    </div>
  );
};

export default RadioField;

RadioField.propTypes = { setFieldValue: PropTypes.func };