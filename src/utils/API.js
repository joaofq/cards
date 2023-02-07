export async function getDeck() {
  try {
    const res = await fetch(
      'https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=2s,3s,4s,5s,6s,7s,8s,9s,0s',
    );
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error('error: ' + res.status);
    }
  } catch (error) {
    return error;
  }
}

export async function drawCard(deckId) {
  try {
    const res = await fetch(
      `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`,
    );
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error('error: ' + res.status);
    }
  } catch (error) {
    return error;
  }
}

export async function shuffleDeck(deckId) {
  try {
    const res = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`,
    );
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error('error: ' + res.status);
    }
  } catch (error) {
    return error;
  }
}
