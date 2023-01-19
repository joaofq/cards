import './popup.css';

function Popup(props) {
  return (
    <div className={`popup ${props.isPopupOpen ? 'popup__opened' : ''}`}>
      <div className="popup__modal">
        <h2>{props.isUserWinner ? ' User wins!' : ' Computer wins!'}</h2>
        <input
          type="button"
          className="main__button"
          value="close"
          onClick={props.popupClose}
        />
      </div>
    </div>
  );
}

export default Popup;
