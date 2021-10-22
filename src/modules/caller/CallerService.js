import { useEffect, useState } from "react";
import { getRandomIdx } from "../../utils";



export const useCallerPhrases = (source) => {
  const [phrases, setPhrases] = useState();
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    const copy = [...source]
    setPhrases(copy);
  }, [source]);

  const selectPhrase = () => {
    const randomIdx = getRandomIdx(phrases.length);
    if (phrases.length > 0) {
      setPhrase(phrases.splice(randomIdx, 1));
    } else {
      setPhrase("Game Finished!");
    }
  };

  return [phrase, selectPhrase];
}