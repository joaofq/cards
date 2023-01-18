import './popup.css';

function Popup(props) {
  return (
    <div className="popup">
      Aqui está o popup:
      {props.isPopupOpen ? ' Abriu' : ' Fechado'}
      {props.isUserWinner ? ' User wins' : ' Pc wins'}
    </div>
  );
}

export default Popup;
