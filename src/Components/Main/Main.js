import { useState, useEffect, useRef } from 'react';
import './main.css';
import { getDeck, drawCard, shuffleDeck } from '../../utils/API';

function Main(props) {
  const [baralho, setBaralho] = useState({});
  const [userCard, setUserCard] = useState('');
  const [computerCard, setComputerCard] = useState('');

  const userImage = useRef();
  const computerImage = useRef();

  useEffect(() => {
    getDeck().then((res) => {
      setBaralho(res);
    });
  }, []);

  function handleButtonClick() {
    shuffleDeck(baralho.deck_id);
    computerImage.current.innerHTML = `<span ref=${computerImage}></span>`;
    drawCard(baralho.deck_id).then((res) => {
      setUserCard(res.cards[0]);
      setComputerCard(res.cards[1]);
      userImage.current.innerHTML = `<img src=${res.cards[0].image} className="main__card_img" />`;
    });
  }

  function handlePlay() {
    computerImage.current.innerHTML = `<img src=${computerCard.image} className="main__card_img" />`;
    let notaUser = zeroConvert(userCard.value);
    let notaPc = zeroConvert(computerCard.value);
    console.log(notaUser + ' x ' + notaPc);
    if (notaUser > notaPc) {
      console.log('Usuário Ganhou!');
    } else {
      console.log('Computador ganhou!');
    }
  }

  function zeroConvert(nota) {
    if (nota === '0') {
      console.log('troucou ' + nota + typeof nota);
      nota = '10';
      return parseInt(nota);
    }
    return parseInt(nota);
  }

  return (
    <main className="main">
      <h2>{`Baralho: ${baralho.deck_id}`}</h2>
      <section className="main__cards">
        <div className="main__card">
          <h2 className="main__card_title">Jogador</h2>
          <span ref={userImage}></span>
        </div>
        <div className="main__card">
          <h2 className="main__card_title">Computador</h2>
          <span ref={computerImage}></span>
        </div>
      </section>
      <section className="main__bottom">
        <button className="main__button" onClick={handleButtonClick}>
          Tirar carta
        </button>
        <button className="main__button" onClick={handlePlay}>
          Apostar!
        </button>
      </section>
    </main>
  );
}

export default Main;
