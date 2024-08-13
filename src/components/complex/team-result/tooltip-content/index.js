function TooltipContent({kills, deaths}) {
  return (
    <ul>
      <li>
        <span>Total kills: {kills}</span>
      </li>
      <li>
        <span>Total deaths: {deaths}</span>
      </li>
    </ul>
  );
}

export default TooltipContent;
