// import useShowRealLifeSituations from '../../../../services/hooks/progress/useShowRealLifeSituations';

import useShowRealLifeSituations from "../../../../services/hooks/progress/useShowRealLifeSituations";

function RealLifeSituations() {

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
      <div className={`header-basic`}>
        <h2>Real Life Situations</h2>
        <span>Those that will open doors to you.</span>
      </div>


      {group.map((s) => (
        <details key={s.situationId}>
          <summary>{s.situationName}</summary>

          <ul>{s.subsituations.map(s => (
            <p key={s}>{s} </p>
          ))} </ul>
        </details>
      ))}



    </>
  )
}

export default RealLifeSituations