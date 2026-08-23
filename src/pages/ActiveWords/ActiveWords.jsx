import React, { useEffect, useState } from 'react'
import styles from './ActiveWords.module.css';
import useFindWords from '@/services/hooks/progress/useFindWords';


function ActiveWords() {

  const obj = {
    userId: 1,
    language: "EN",
  }

  const words = useFindWords(obj);

  console.log(words);

  const groups = words.reduce((acc, item) => {

    // return current array of acc collection when their situationId matches with the item.
    const arrCoincidence = acc.find(obj => obj.situationId === item.situationId);

    // I won't create another array, i will add the word to that array of acc.
    if (arrCoincidence) {
      arrCoincidence.words.push(item.wordName);
    } else {
      acc.push({
        situationId: item.situationId,
        situationName: item.situationName,
        words: [item.wordName]
      });
    }

    return acc;

  }, []);

  console.log(groups);



  return (

    <>
      <div className={styles.wordsLearned}>

        <div className={`header-basic`}>
          <h2>Words Learned</h2>
          <span>only those necessary to complete levels.</span>
        </div>


        {groups.map(p => (
          <details>
            <summary>{p.situationName}</summary>
            {p.words.map(w => (
              <li>{w} </li>
            ))}
          </details>
        ))}

      </div>
    </>
  )
}

export default ActiveWords

