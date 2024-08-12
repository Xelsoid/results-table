import './index.css';

function ButtonIcon({symbol, title, onClickCallback}) {
  return (
    <button className="ButtonIconWrapper" title={title} onClick={onClickCallback}>
      {symbol}
    </button>
  );
}

export default ButtonIcon;

