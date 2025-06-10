import { useState, useCallback } from 'react'
import PockDicMain from './components/PockDicMain'
import PockDicList from './components/PockDicList'

function App() {
   const [input, setInput] = useState('')
   const [cards, setCards] = useState([])
   const [disabledCards, setDisabledCards] = useState([])

   const Pocknames = ['구구', '꼬부기', '나옹', '두두', '디그다', '모다피', '버터플', '이상해씨', '치코리타', '파이리', '푸린', '피카츄']

   const handleAdd = () => {
      const name = input.trim()
      if (!name) return

      if (!Pocknames.includes(name)) {
         alert(`${name}은(는) 존재하지 않는 포켓몬입니다.
            등록 가능 포켓몬 목록 : ${Pocknames.join(', ')}`)
         return
      }
      if (cards.includes(name)) {
         alert(`${name}은(는) 이미 등록되어 있습니다.`)
         return
      }
      setCards((prev) => [...prev, name])
      setInput('')
   }

   const handleRemove = useCallback((name) => {
      setDisabledCards((disabled) => {
         if (disabled.includes(name)) {
            alert(`${name}은(는) 비활성화 상태이므로 삭제할 수 없습니다.`)
            return disabled
         }
         setCards((prev) => prev.filter((card) => card !== name))
         return disabled
      })
   }, [])

   const toggleDisable = useCallback((name) => {
      setDisabledCards((prev) => (prev.includes(name) ? prev.filter((card) => card !== name) : [...prev, name]))
   }, [])

   return (
      <PockDicMain input={input} setInput={setInput} handleAdd={handleAdd}>
         <PockDicList cards={cards} handleRemove={handleRemove} disabledCards={disabledCards} toggleDisable={toggleDisable} />
      </PockDicMain>
   )
}

export default App
