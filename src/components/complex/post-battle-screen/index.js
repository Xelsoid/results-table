import './index.css';
import TeamResult from "../team-result";
import winners from '../../../winners.json';
import losers from '../../../losers.json';

function PostBattleScreen() {
  return (
    <div className='PostScreenWrapper'>
      <TeamResult results={winners}/>
      <TeamResult results={losers}/>
    </div>
  );
}

export default PostBattleScreen;
