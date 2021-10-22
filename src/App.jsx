import {useEffect, useState} from 'react';
import { DinoService } from './http/dino';
import BingoCard from './modules/bingo/BingoCard';
import { generateBingoCard } from './modules/bingo/BingoService';
import Caller from './modules/caller/Caller';

function App() {
  const [card, setCard] = useState(generateBingoCard());
  const [phrases, setPhrases] = useState([]);
 
    //Load Phrases
  useEffect(() => {
       DinoService.getRandomDinos().then(dinos => {
         setPhrases(dinos[0]);
       });
   },[]);
  

  return (
    <div className="App">
    <div className="flex justify-center items-center h-screen">
        <div className="px-20 flex gap-y-2 flex-col md:mt-10">
          <Caller phrases={phrases} />
          <BingoCard card={card} phrases={phrases} onSelect={setCard}/>
        </div>
       </div> 
    </div>
  );
}

export default App;
