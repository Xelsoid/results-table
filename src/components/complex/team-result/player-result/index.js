import './index.css';
import ButttonIcon from "../../../atomic/button-icon";
import skull from '../../../../assets/skull.jpg'
import leaf from '../../../../assets/leaf.jpg'
import { Tooltip as ReactTooltip } from "react-tooltip";
import TooltipContent from "../tooltip-content";

function PlayerResult({id, name, score, status, kills, deaths, addFriend}) {
  const addFriendHandler = () => {
    addFriend(id);
  }
  return (
    <tr className='PlayerResultRow'>
      <td className='PlayerResultCell'>
        <div className='HighLighter'>{name}</div>
      </td>
      <td>
        <img src={status ? leaf : skull} className='StatusImage' alt='status image'/>
      </td>
      <td className='PlayerResultCell'>
        <div className='HighLighter'>{score}</div>
      </td>
      <td className='PlayerResultCell'>
        <button className='TooltipIcon' data-tooltip-id={id}>?</button>
        <ReactTooltip
          id={`${id}`}
          place="bottom"
          content={<TooltipContent kills={kills} deaths={deaths}/>}
        />
      </td>
      <td className='PlayerResultCell'>
        <ButttonIcon symbol="+" title='add to friends' onClickCallback={addFriendHandler}/>
      </td>
    </tr>
  );
}

export default PlayerResult;
