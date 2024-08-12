import './index.css';
import TeamResult from "../team-result";
import winners from '../../../__mocks__/winners.json';
import losers from '../../../__mocks__/losers.json';
import playersInfo from '../../../__mocks__/playersInfo.json';

function PostBattleScreen() {
  return (
    <div className='PostScreenWrapper'>
      <div className='PostScreenResults'>
        <div>
          <h3>Winner winner, Chicken dinner</h3>
          <TeamResult results={winners} globalScore={playersInfo}/>
        </div>
        <div>
          <h3>Rotten tomatoes</h3>
          <TeamResult results={losers} globalScore={playersInfo}/>
        </div>
      </div>
    </div>
  );
}

export default PostBattleScreen;
