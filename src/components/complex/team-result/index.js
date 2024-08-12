import './index.css';
import { useState } from "react";
import PlayerResultHeader from "./player-result-header";
import PlayerResult from "./player-result";

const addNewFriend = (id) => {
  alert(`Friend with ${id} added`);
}

const sortByScore = (a, b) => {
  return b.score - a.score;
}

function TeamResult({results, globalScore}) {
  console.log(results)
  const [teamResults] = useState(results.sort(sortByScore));

  if(results.length === 0) {
    return null;
  }

  return (
    <table className='TeamTable'>
      <thead>
        <PlayerResultHeader/>
      </thead>
      <tbody>
      {teamResults?.map(({id, name, score, alive}) => {
          const {kills,deaths } = globalScore.find(playerInGlobalScore => playerInGlobalScore.id === id);
          return (
            <PlayerResult
              key={id}
              id={id}
              name={name}
              score={score}
              status={alive}
              kills={kills}
              deaths={deaths}
              addFriend={addNewFriend}
            />
          )
        }
      )}
      </tbody>
    </table>
  );
}

export default TeamResult;
