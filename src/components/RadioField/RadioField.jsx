import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import css from "./RadioField.module.scss";
import RadioItem from "components/RadioItem/RadioItem";

import { validatePosition } from "src/validation/validation";

import { selectPositions } from "src/redux/positions/positionsSelectors";

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
