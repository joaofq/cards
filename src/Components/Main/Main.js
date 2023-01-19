import { useState, useEffect, useRef } from 'react';
import './main.css';
import Popup from '../Popup/Popup';
import { getDeck, drawCard, shuffleDeck } from '../../utils/API';

function Main(props) {
  const [baralho, setBaralho] = useState({});
  const [userCard, setUserCard] = useState(false);
  const [computerCard, setComputerCard] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isUserWinner, setIsUserWinner] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const userImage = useRef();
  const computerImage = useRef();

  useEffect(() => {
    getDeck().then((res) => {
      setBaralho(res);
    });
  }, []);

  function handleButtonClick() {
    setIsPopupOpen(false);

    shuffleDeck(baralho.deck_id);
    computerImage.current.innerHTML = `<span ref=${computerImage}></span>`;
    drawCard(baralho.deck_id).then((res) => {
      setUserCard(res.cards[0]);
      setComputerCard(res.cards[1]);
      userImage.current.innerHTML = `<img src=${res.cards[0].image} />`;
      setIsDisabled(false);
    });
  }

  function handlePlay() {
    computerImage.current.innerHTML = `<img src=${computerCard.image}  />`;
    setIsDisabled(true);

    let notaUser = zeroConvert(userCard.value);
    let notaPc = zeroConvert(computerCard.value);
    console.log(notaUser + ' x ' + notaPc);
    if (notaUser > notaPc) {
      setIsUserWinner(true);
      console.log('Usuário Ganhou!');
    } else {
      console.log('Computador ganhou!');
      setIsUserWinner(false);
    }
    setTimeout(() => setIsPopupOpen(true), 1000);
  }

  function zeroConvert(nota) {
    if (nota === '0') {
      console.log('troucou ' + nota + typeof nota);
      nota = '10';
      return parseInt(nota);
    }
    return parseInt(nota);
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
  }

  return (
    <main className="main">
      <h2>{`Baralho: ${baralho.deck_id}`}</h2>
      <section className="main__cards">
        <div className="main__card">
          <h2 className="main__card_title">Jogador</h2>
          <span ref={userImage} className="main__card_img"></span>
        </div>
        <div className="main__card">
          <h2 className="main__card_title">Computador</h2>
          <span ref={computerImage} className="main__card_img"></span>
        </div>
      </section>
      <section className="main__bottom">
        <input
          type="button"
          className="main__button"
          onClick={handleButtonClick}
          value={computerCard === '' ? 'Buy card' : 'Rebuy card'}
        />
        <input
          type="button"
          className={'main__button'}
          onClick={handlePlay}
          value="Play!"
          disabled={isDisabled}
        />
      </section>
      <Popup
        isPopupOpen={isPopupOpen}
        isUserWinner={isUserWinner}
        popupClose={handlePopupClose}
      />
    </main>
  );
}

export default Main;
