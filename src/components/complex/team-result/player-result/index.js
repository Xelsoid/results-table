import './index.css';
import ButttonIcon from "../../../atomic/button-icon";
import skull from '../../../../assets/skull.jpg'
import leaf from '../../../../assets/leaf.jpg'

function PlayerResult({name, score, status}) {
  return (
    <tr>
      <td>{name}</td>
      <td><img src={status ? leaf : skull} className='StatusImage' alt='status image'/></td>
      <td>{score}</td>
      <td><ButttonIcon symbol="?" title='about player'/></td>
      <td><ButttonIcon symbol="+" title='add to friends'/></td>
    </tr>
  );
}

export default PlayerResult;
