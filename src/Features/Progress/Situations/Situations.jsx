// import useShowRealLifeSituations from '../../../../services/hooks/progress/useShowRealLifeSituations';

import useShowRealLifeSituations from "@/Features/Progress/Situations/useShowRealLifeSituations";

export default function Situations() {

  const obj = {
    userId: 1,
    language: "EN"
  }

  const showRealLifeSituations = useShowRealLifeSituations(obj);

  const group = showRealLifeSituations.reduce((acc, item) => {

    const situationExistence = acc.find(
      situation => situation.situationId === item.situationId
    )

    if (situationExistence) {
      situationExistence.subsituations.push(item.subsituationName);
    } else {
      acc.push({
        situationId: item.situationId,
        situationName: item.situationName,
        subsituations: [
          item.subsituationName
        ]
      });
    }
    return acc;

  }, [])

  console.log(showRealLifeSituations);

  console.log(group)


  return (
    <>
    <div className={`containerPrimary`}>

      <div className={`headerPrimary`}>
        <h2>Real Life Situations</h2>
        <span>Those that will open doors to you.</span>
      </div>


      {group.map((s) => (
        <details key={s.situationId} className={`listPrimary`}>
          <summary>{s.situationName} </summary>

          <ul>{s.subsituations.map(s => (
            <li key={s}>{s} </li>
          ))} </ul>
        </details>
      ))}

    </div>


    </>
  )
}
