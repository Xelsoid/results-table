import './index.css';
const noop = () => {};

function ButtonIcon({symbol, title, onClickCallback = noop}) {
  return (
    <button className="ButtonIconWrapper" title={title} onClick={onClickCallback}>
      {symbol}
    </button>
  );
}

export default ButtonIcon;

