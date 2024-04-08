import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./UsersSection.module.scss";

import Button from "components/Button/Button";
import UserItem from "components/UserItem/UserItem";

import {
  selectPage,
  selectUsers,
  selectTotalPages,
} from "src/redux/users/usersSelectors";
import { getUsers } from "src/redux/users/usersOperations";
import { setPage } from "src/redux/users/usersSlice";

const UsersSection = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

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
        {page < totalPages && (
          <Button text="Show more" isLarge={true} handleFunction={onLoadMore} />
        )}
      </div>
    </section>
  );
};

export default UsersSection;
