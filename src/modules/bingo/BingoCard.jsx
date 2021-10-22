import { cacluateBingos  } from './BingoService';
import { PhraseBlock } from "./PhraseBlock";

const BingoCard = ({ card, phrases, onSelect }) => {

  const onBlockSelect = (rowId, blockId) => () => {
    const cardCopy = [...card];
    cardCopy[rowId][blockId].selected= true;
    
    onSelect(cardCopy);
  };

  const bingos = cacluateBingos(card);
  
  return <div>
    <canvas id="confetti" className="absolute -inset-px"></canvas>
    <div id="bingo-card" className="bg-white flex flex-col rounded-xl shadow-md">
    {
      card.map((row, rowIdx) => 
         <div key={rowIdx} className="flex">
            {row.map((block, blockIdx) =>
               <PhraseBlock
                key={block.id}
                phrase={((row.length * rowIdx) + blockIdx) !== 12 ? phrases[((row.length * rowIdx) + blockIdx)] : "Free" }
                selected={block.selected}
                onClick={onBlockSelect(rowIdx,blockIdx)}
                shouldHighlight={bingos.findIndex(bl => bl.id === block.id) > -1}
              />
            )}
         </div>
        )
    }
    </div>
  </div>
}

export default BingoCard;