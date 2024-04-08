import PropTypes from "prop-types";

import css from "./UserItem.module.scss";

const UserItem = ({ user }) => {
  return (
    <li className={css.listItem}>
      <img
        src={
          user.photo.endsWith("placeholder.png")
            ? "../../../src/images/photo-cover.png"
            : user.photo || "../../../src/images/photo-cover.png"
        }
        alt="User photo"
        className={css.userImage}
      />
      <p className={css.userText} title={user.name}>
        {user.name}
      </p>
      <div className={css.userInfoWrapper}>
        <p className={css.userText} title={user.position}>
          {user.position}
        </p>

        <p className={css.userText} title={user.email}>
          {user.email}
        </p>
        <p className={css.userText} title={user.phone}>
          {user.phone}
        </p>
      </div>
    </li>
  );
};

export default UserItem;

UserItem.propTypes = {
  user: PropTypes.object,
};
