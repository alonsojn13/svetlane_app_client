import { Link } from 'react-router-dom';
import styles from './UserProfile.module.css'

import home from '@/Assets/icons/homeWhite.svg'

import useUserInfo from '@/Shared/hooks/user/useUserInfo';

function UserProfile() {

  const userInfo = useUserInfo();

  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <Link to={"/dashboard"}>
          <img src={home} alt="" /></Link>
      </header>


      <article className={styles.userProfile}>

        <header className={styles.pictureProfile}>
          <img src={userInfo.profilePictureUrl} alt="" />
          <div className={styles.profileBlur}></div>

          <footer className={styles.paragraphBlur}>
            <p>{userInfo.name} {userInfo.lastname} </p>
            <p>{userInfo.motherTongueString}</p>
          </footer>
        </header>

        <main>

          <p className={styles.title}>Email: </p>
          <p>{userInfo.email} </p>

          <p className={styles.title}>Mother Tongue: </p>
          <p>{userInfo.motherTongueString} </p>


          <p className={styles.title}>Currently Learning: </p>
          <p>{userInfo.targetLanguageString} </p>


          <p className={styles.title}>CEFR Level: </p>
          <p>{userInfo.level} </p>

          <p className={styles.title}>Short Bio: </p>
          <p>{userInfo.shortBio} </p>

          <p className={styles.title}>Large Bio: </p>
          <p>{userInfo.largeBio} </p>

        </main>


      </article>
    </div>
  )
}

export default UserProfile  