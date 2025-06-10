import './css/PockDicMain.css'

function PockDicMain({ children, input, setInput, handleAdd }) {
   const Pocknames = ['구구', '꼬부기', '나옹', '두두', '디그다', '모다피', '버터플', '이상해씨', '치코리타', '파이리', '푸린', '피카츄']
   return (
      <div>
         <h2>포켓몬 도감</h2>
         <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
               if (e.key === 'Enter') handleAdd()
            }}
            placeholder="포켓몬 이름 입력"
         />
         <button onClick={handleAdd}>등록</button>
         <p style={{ fontSize: '12px', color: 'gray', marginTop: '8px' }}>등록 가능 포켓몬: {Pocknames.join(', ')}</p>

         {children}
      </div>
   )
}

export default PockDicMain
