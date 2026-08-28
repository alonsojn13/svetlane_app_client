import React, { useState } from 'react'

import styles from './SocialPosts.module.css';
import { Link } from 'react-router-dom';
import home from '@/assets/icons/homeWhite.svg'
import spFlag from '@/assets/icons/spFlag.svg'
import frFlag from '@/assets/icons/frFlag.svg'
import microphone from '@/assets/icons/microphoneWhite.svg'
import greenDot from '@/assets/icons/greenDot.svg'
import bellWhite from '@/assets/icons/bellWhite.svg'

import sendMessageWhite from '@/assets/icons/sendMessageWhite.svg'
import useCreatePost from '@/services/hooks/social/useCreatePost';
import useGetPosts from '@/services/hooks/social/useGetPosts';
import { useSendContactRequest } from '@/services/hooks/social/useSendFriendRequest';

function SocialPosts() {

  const [paragraphPost, setParagraphPost] = useState("");

  function createPost() {

    const paragraphPostUser = {
      paragraph: paragraphPost
    }

    const res = useCreatePost(paragraphPostUser);

    setParagraphPost("");

  }

  const posts = useGetPosts();
  console.log(posts);


  function sendContactRequest(contactUserId) {
    console.log(contactUserId);
    const res = useSendContactRequest(contactUserId);
    console.log(res);

  }



  // const posts = usePosts();
  // console.log(posts);

  return (
    <>

      <section className={styles.socialPosts}>

        <header className={styles.header}>
          <Link to={"/mailbox"}><img src={bellWhite} alt="" /></Link>
          <Link to={"/posts"}><img src={bellWhite} alt="" /></Link>
          <Link to={"/dashboard"}><img src={home} alt="" /></Link>
        </header>

        <article className={styles.createPost}>
          <header>
            <h2>Start the conversation...</h2>
          </header>

          <footer>
            <textarea name="" id="" placeholder='How is going your monday?...' onChange={(e) => setParagraphPost(e.target.value)} value={paragraphPost}></textarea>
            <div><img onClick={() => createPost()} src={microphone} alt="" /></div>
          </footer>
        </article>

        {posts && posts.map((post) => (

          <article key={post.userId} className={styles.post}>

            <header>

              <div className={styles.userProfileInfo}>
                <h3><img className={styles.userMotherTongueFlag} src={frFlag} alt="" /> {post.name} {post.lastname} <img className={styles.greenDot} src={greenDot} alt="" /> </h3>
                <span>I love workout by night with my friends.</span>
              </div>

              <div className={styles.hobbies}>
                <span>Gym</span>
                <span>Lecture</span>
                <span>Design</span>
              </div>

            </header>


            <main>

              <p className={styles.paragraph}>{post.paragraph}
                <span>Monday - 24:14</span>
              </p>

              <section>

                <div>
                  <h5>Practicing</h5>
                  <ul>
                    <li>
                      <img className={styles.userLanguageLearningFlag} src={spFlag} alt="" />
                    </li>
                  </ul>
                </div>

                <div className={styles.contact} onClick={() => sendContactRequest(post.user_id)} >
                  <span>Contact</span>
                  <img className={styles.contactImg} src={sendMessageWhite} alt="" />
                </div>

              </section>
            </main>

            <footer>
              <textarea name="" id="" placeholder='Well, I think...'></textarea>
              <div><img src={microphone} alt="" /></div>
            </footer>

          </article>

        ))}

        <article className={styles.post}>

          <header>

            <div className={styles.userProfileInfo}>
              <h3><img className={styles.userMotherTongueFlag} src={frFlag} alt="" /> Mark Kuznetsova <img className={styles.greenDot} src={greenDot} alt="" /> </h3>
              <span>I love workout by night with my friends.</span>
            </div>

            <div className={styles.hobbies}>
              <span>Gym</span>
              <span>Lecture</span>
              <span>Design</span>
            </div>

          </header>


          <main>

            <p className={styles.paragraph}>I want to know what do you think about hiking
              <span>Monday - 24:14</span>
            </p>

            <section>

              <div>
                <h5>Practicing</h5>
                <ul>
                  <li>
                    <img className={styles.userLanguageLearningFlag} src={spFlag} alt="" />
                  </li>
                </ul>
              </div>

              <div className={styles.contact} onClick={() => sendContactRequest(post.user_id)} >
                <span>Contact</span>
                <img className={styles.contactImg} src={sendMessageWhite} alt="" />
              </div>

            </section>
          </main>

          <footer>
            <textarea name="" id="" placeholder='Well, I think...'></textarea>
            <div><img src={microphone} alt="" /></div>
          </footer>

        </article>


      </section>

    </>
  )
}

export default SocialPosts