
import styles from  "./App.module.css";
import UserList from "../features/users/components/user-list/UserList";


export const App = () => {
  return (
     <div>
        <h1 className={styles.titleH1}>User List</h1>
        <UserList/>
     </div>
  )
}

export default App;
