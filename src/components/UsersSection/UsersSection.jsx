import { useEffect } from "react";

import Button from "components/Button/Button";

import css from "./UsersSection.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { selectPage, selectUsers } from "src/redux/users/usersSelectors";
import { getUsers } from "src/redux/users/usersOperations";
import { setPage } from "src/redux/users/usersSlice";
import UserItem from "components/UserItem/UserItem";

const UsersSection = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const onLoadMore = () => {
    dispatch(setPage());
  };

  return (
    <section className={`${css.section} ${css.userSection}`}>
      <div className={`${css.container} ${css.secondaryContainer}`}>
        <h2 className={css.title} id="users">
          Working with GET request
        </h2>
        <ul className={css.usersList}>
          {users.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </ul>
        <Button text="Show more" isLarge={true} handleFunction={onLoadMore} />
      </div>
    </section>
  );
};

export default UsersSection;
