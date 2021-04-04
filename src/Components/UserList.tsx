import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../redux/actions/appUserAction';

const UserList: React.FC = () => {
  const { error, users, loading } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (loading) {
    return (
      <div className="">
        <h1>Загрузка данных</h1>;
      </div>
    );
  }
  if (error) {
    return (
      <div className="">
        <h1>Ошибка :{error}</h1>;
      </div>
    );
  }
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="" key={user.id}>
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
