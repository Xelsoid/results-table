import './index.css';

function PlayerResultHeader() {
  return (
    <tr className='PlayerResultHeaderRow'>
      <th>AKA</th>
      <th>D/A</th>
      <th>Score</th>
      <th colSpan={2}></th>
    </tr>
  );
}

export default PlayerResultHeader;
