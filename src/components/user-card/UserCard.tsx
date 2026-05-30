import React from "react";
import { User } from "../../features/users/redux/usersTypes";
import styles from "./UserCard.module.css"



type UserCardProps={
    user:User
}

const UserCard = ({user}:UserCardProps) => {
  const { name, city, email, phone, image } = user;
  return (
      <div className="tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5" role="listitem">
      <img className="br3" alt="user" src={image} sizes="50vw" />
      <div>
        <h2 className={styles.titleH2}>{name}</h2>
        <h3 className={styles.titleH3}>{city}</h3>
        <p className={styles.paraP}>Email:{email}</p>
        <p className={styles.paraP}>Phone:{phone}</p>
      </div>
    </div>
  )
}

export default UserCard;