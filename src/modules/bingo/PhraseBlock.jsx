export const PhraseBlock = ({ phrase, selected, shouldHighlight, ...rest}) => {
  
  return <div className={`flex justify-center md:h-32 md:w-32 ${shouldHighlight && 'bg-gray-100 line-through'}`} {...rest}>
    <div className={`flex justify-center items-center 
    p-1 text-xs md:text-sm md:w-24 md:h-24 w-20 h-20 m-2 
    ${selected ? 'rounded-full transform bg-yellow-100 scale-100 shadow-lg' 
    : 'transition duration-500 ease-in-out cursor-pointer rounded-full transform hover:bg-yellow-200 hover:scale-150 hover:shadow-lg hover:font-bold'}
    `}>
      <span className="text-center break-all">{phrase}</span>
    </div>
  </div>
}