import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { selectError, selectIsLoading, selectUserList } from '../../redux/usersSelector'
import UserCard from '../../../../components/user-card/UserCard';
import styles from "./UserList.module.css"
import { User } from '../../redux/usersTypes';
import { loadUsers } from '../../redux/usersThunk';

 const UserList = () => {
    const isLoading = useAppSelector(selectIsLoading)
    const error =useAppSelector(selectError)
    const userList= useAppSelector(selectUserList)
    const dispatch =useAppDispatch();

    useEffect(()=>{
      dispatch(loadUsers())
    },[dispatch])

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
  return (
     <div className={styles.grid__container}>
            {userList && userList.map((user:User) => {
              return (
                <UserCard
                  key={user.id}
                  user={user}
                />
              );
            })}
          </div>
  )
}

export default UserList