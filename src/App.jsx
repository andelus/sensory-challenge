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
    <div className="App md:container md:mx-auto md:px-4 px-3">
    <div className="flex justify-center items-center">
        <div className="flex gap-y-2 flex-col mt-10 mb-10 md:w-auto w-full">
          <Caller phrases={phrases} />
          <BingoCard card={card} phrases={phrases} onSelect={setCard}/>
        </div>
       </div> 
    </div>
  );
}

export default App;
