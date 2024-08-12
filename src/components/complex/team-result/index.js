import './index.css';
import PlayerResultHeader from "./player-result-header";
import PlayerResult from "./player-result";

function TeamResult({results}) {
  if(results.length === 0) {
    return null;
  }

  return (
    <div className='TeamTableWrapper'>
    <table className='TeamTable'>
      <thead>
        <PlayerResultHeader/>
      </thead>
      <tbody>
      {results?.map(({name, score, alive}) => <PlayerResult name={name} score={score} status={alive}/>)}
      </tbody>
    </table>
    </div>
  );
}

export default TeamResult;
