import { MdOutlineRemoveCircleOutline } from 'react-icons/md'
import './css/PockDicList.css'

function PockDicList({ cards, handleRemove, disabledCards, toggleDisable }) {
   return (
      <ul>
         {cards.map((card, idx) => {
            const isDisabled = disabledCards.includes(card)
            return (
               <li key={idx}>
                  <div className="card" onDoubleClick={() => toggleDisable(card)} style={{ opacity: isDisabled ? 0.5 : 1 }}>
                     <img
                        src={`/images/${card}.png`}
                        alt={card}
                        style={{
                           filter: isDisabled ? 'grayscale(100%)' : 'none',
                           transition: 'filter 0.3s ease',
                        }}
                     />
                     <div className="card-content">
                        <p>{card}</p>
                        <button onClick={() => handleRemove(card)}>
                           <MdOutlineRemoveCircleOutline />
                        </button>
                     </div>
                  </div>
               </li>
            )
         })}
      </ul>
   )
}

export default PockDicList
