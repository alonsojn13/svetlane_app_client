import profileOne from '@/assets/imgs/profileOne.jpg'
import styles from './UserProfile.module.css'
import useUserInfo from '@/services/hooks/useUserInfo';

function UserProfile() {

  const res = useUserInfo();
  console.log(res);
  
  return (
    <div className={styles.userProfileSec}>

      <article>

        <div className={styles.pictureProfile}>
          <img src={profileOne} alt="" />
          <div className={styles.profileBlur}></div>

          <footer className={styles.paragraphBlur}>
            <p>Alonso Nuñez</p>
            <p>Web Developer</p>
          </footer>

        </div>

      </article>
    </div>
  )
}

export default UserProfile  