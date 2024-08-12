import './index.css';
const noop = () => {};

function ButtonIcon({symbol, title, playerId, onClickCallback = noop}) {
  const onClickHandler = () => {
    onClickCallback(playerId);
  }
  return (
    <button className="ButtonIconWrapper" title={title} onClick={onClickHandler}>
      {symbol}
    </button>
  );
}

export default ButtonIcon;

