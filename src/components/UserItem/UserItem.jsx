import css from "./UserItem.module.scss";

import PropTypes from "prop-types";

const UserItem = ({ user }) => {
  return (
    <li className={css.listItem}>
      <img src={user.photo} alt="User photo" className={css.userImage} />
      <p className={css.userText}>{user.name}</p>
      <div>
        <p className={css.userText}>{user.position}</p>
        <p className={css.userText}>{user.mail}</p>
        <p className={css.userText}>{user.phone}</p>
      </div>
    </li>
  );
};

export default UserItem;

UserItem.propTypes = {
  user: PropTypes.object,
};
