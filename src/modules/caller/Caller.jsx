import { useCallerPhrases } from "./CallerService";

const Caller = ({phrases}) => {
  const [phrase, selectPhrase] = useCallerPhrases(phrases);
  
  return <div onClick={selectPhrase} className="flex justify-center items-center h-20 w-full bg-blue-700 text-white text-3xl shadow-md rounded-xl ring-4 cursor-pointer">
      <h2 className="animate-pulse">{phrase ? `🦖 ${phrase}` : '🦖 Click That Dino! 🦕'}</h2>
    </div>
}


export default Caller;