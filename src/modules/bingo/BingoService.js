export const createBlock = (id, selected = false) => ({
  id,
  selected
});

export const generateBingoCard = (size = 25) => {
  const bingoCard = [];
  let row = [];
  for(let i=0; i<size; i++){
    row.push(i !== 12 ? createBlock(i) : createBlock(i, true));
    if(row.length === Math.sqrt(size)) {
      bingoCard.push(row);
      row = [];
    }
  }
  
  return bingoCard; 
}

/**
 * @FIXME Not very efficient should be refactorted & lower complexity
 * @param {*} bingoCard 
 * @returns 
 */
export const cacluateBingos = (bingoCard) => {
  // Collect Bingos in Rows
  let bingos = [];
  for(let i=0;i<bingoCard.length;i++) {
    const rowBingo = bingoCard[i].filter(block => block.selected === true);
    if(rowBingo.length === bingoCard.length){
      bingos.push(...rowBingo);
    }
  }
  
  // Collect Bingos in Cols
  for(let i=0;i<bingoCard.length;i++) {
    const col = [];
    for(let j=0;j<bingoCard.length;j++) {
      col.push(bingoCard[j][i]);
    }
    
    const colBingo = col.filter(block => block.selected === true);
    if(colBingo.length === bingoCard.length){
      bingos.push(...colBingo);
    }
  }
  
  // Collect Bingos in Diag
  let diag1 = [];
  let diag2 = [];
  for(let i=0;i<bingoCard.length;i++) {
    diag1.push(bingoCard[i][i]);
    diag2.push(bingoCard[i][bingoCard.length - i - 1])
  }
  const diag1Bingo = diag1.filter(block => block.selected === true);
  const diag2Bingo = diag2.filter(block => block.selected === true);
  if(diag1Bingo.length === bingoCard.length) bingos.push(...diag1Bingo);
  if(diag2Bingo.length === bingoCard.length) bingos.push(...diag2Bingo);

  return bingos;
}
