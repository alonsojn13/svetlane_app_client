import profileOne from '@/assets/imgs/profileOne.jpg'
import styles from './UserProfile.module.css'
import useUserInfo from '@/services/hooks/user/useUserInfo';
import { Link } from 'react-router-dom';
import home from '@/assets/icons/homeWhite.svg'

function UserProfile() {

  const res = useUserInfo();
  console.log(res);
  
  return (
    <div className={styles.userProfileSec}>

      <header className={styles.header}>
        <Link to={"/dashboard"}>
        <img src={home} alt="" /></Link>
      </header>


      <article>

        <div className={styles.pictureProfile}>
          <img src={res.profile_picture} alt="" />
          <div className={styles.profileBlur}></div>

          <footer className={styles.paragraphBlur}>
            <p>{res.name} {res.lastname} </p>
            <p>Web Developer</p>
          </footer>

        </div>

      </article>
    </div>
  )
}

export default UserProfile  