export function getDeck() {
  return fetch(
    'https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=2s,3s,4s,5s,6s,7s,8s,9s,0s',
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject('error: ' + res.status);
    }
  });
}

export function drawCard(deckId) {
  return fetch(
    `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject('error: ' + res.status);
    }
  });
}

export function shuffleDeck(deckId) {
  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/
  `);
}
