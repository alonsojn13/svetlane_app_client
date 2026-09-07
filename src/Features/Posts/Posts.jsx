import React, { useState } from 'react'
import styles from './Posts.module.css';
import { Link } from 'react-router-dom';

import home from '@/Assets/icons/homeWhite.svg'
import spFlag from '@/Assets/icons/spFlag.svg'
import frFlag from '@/Assets/icons/frFlag.svg'
import microphone from '@/Assets/icons/microphoneWhite.svg'
import greenDot from '@/Assets/icons/greenDot.svg'
import bellWhite from '@/Assets/icons/bellWhite.svg'
import sendMessageWhite from '@/Assets/icons/sendMessageWhite.svg'

import useCreatePost from '@/Features/Posts/useCreatePost';
import useGetPosts from '@/Features/Posts/useGetPosts';
import { useSendContactRequest } from '@/Features/Posts/useSendFriendRequest';
import Navbar from '@/Components/Navbar/Navbar';

export default function Posts() {

  const [paragraphPost, setParagraphPost] = useState("");
  const [paragraphPostUser, setParagraphPostUser ] = useState("");


  const currentImgParagraphPost = paragraphPost.length === 0 ? microphone : sendMessageWhite;

  const currentImgParagraphPostUser = paragraphPostUser.length === 0 ? microphone : sendMessageWhite;



  function createPost() {

    const paragraphPostUser = {
      paragraph: paragraphPost
    }

    useCreatePost(paragraphPostUser);

    setParagraphPost("");

  }

  const posts = useGetPosts();

  function sendContactRequest(contactUserId) {
    console.log(contactUserId);
    const res = useSendContactRequest(contactUserId);
    console.log(res);

  }

  return (
    <>

      <Navbar />
      <section className={styles.container}>



        <article className={styles.createPost}>
          <header>
            <h2>Start the conversation...</h2>
          </header>

          <footer>
            <textarea name="" id="" placeholder='How was your weekend?...' onChange={(e) => setParagraphPost(e.target.value)} value={paragraphPost}></textarea>
            <div><img onClick={() => createPost()} src={currentImgParagraphPost} alt="" /></div>
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
              <textarea name="" id="" placeholder='Well, I think...' onChange={(e) => setParagraphPostUser(e.target.value)} value={paragraphPostUser}></textarea>
              <div><img src={currentImgParagraphPostUser} alt="" /></div>
            </footer>

          </article>

        ))}

      </section>

    </>
  )
}
