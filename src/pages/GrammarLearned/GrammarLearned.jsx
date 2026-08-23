import { useState } from 'react';
import styles from './GrammarLearned.module.css';
import useShowGrammar from '@/services/hooks/progress/useShowGrammar';



function GrammarLearned() {

  const obj = {
    userId: 1,
    language: "EN",
  } 

  const grammar = useShowGrammar(obj);

  console.log(grammar);

  const groups = grammar.reduce((acc,item) => {

    const existsCoincidence = acc.find(arr => {
      arr.level === item.level
    });

    if(existsCoincidence){
      existsCoincidence.names.push(item.name);
    } else{
      acc.push({
        level : item.level,
        names: [
          item.name
        ]
      })
    }

    return acc;

  },[]);

  console.log(groups);


return (
  <>
    <div className={styles.grammarLearned}>
      <div className={`header-basic`}>
        <h2>Grammar Learned</h2>
        <span>only those necessary to complete levels.</span>
      </div>

      {groups.map(arr => (
        <details key={arr.names}>
          <summary>{arr.level}</summary>
          <ul>
          {arr.names.map(a => (
            <li key={a}>{a}</li>
          ))}
          </ul>
        </details>
      ))}


    </div>
  </>
)

}
export default GrammarLearned