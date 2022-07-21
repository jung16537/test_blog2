import { useState } from 'react';
import './App.css';

function App() {
  let [listNmae, reListName] = useState([])
  let [good, regood] = useState([])
  let [modal, setModal] = useState(false)
  let [titleNo, setTitleNo] = useState(0)
  let [addList, setAddList] = useState('')
  return (
    <>
      <header>
        <div>글목록</div>
      </header>
      {
        modal == true ? <Modal listNmae={listNmae} titleNo={titleNo}></Modal> : null
      }
      {
      listNmae.map((a,i)=>{
        return(
            <div className="list" key={i}>
              <p className='listname' onClick={()=>{
                setModal(!modal)
                setTitleNo(i)
                }}>{a}</p>
              <p className='good'><span onClick={()=>{
                let copy = [...good]
                copy[i] = copy[i]+1
                regood(copy)
                }}>:미소짓는_상기된_얼굴:</span> {good[i]} </p>
              <p className='date'>2월 17일 발행 </p>
              <button onClick={()=>{
                let copy = [...listNmae]
                copy.splice(i, 1)
                reListName(copy)
                let copy2 = [...good]
                copy2.splice(i, 1)
                regood(copy2)
              }}>삭제</button>
            </div>
        )
      })
      }
      <div className='input'>
        <input type='text' onChange={(e)=>{
          setAddList(e.target.value)
          }} />
        <button onClick={()=>{
          let copy = [...listNmae]
          copy.unshift(addList)
          reListName(copy)
          let copy2 = [...good]
          copy2.unshift(0)
          regood(copy2)
        }}>전송</button>
      </div>
    </>
  );
}
function Modal(props){
  return(
    <>
        <div className='modal'>
          <h4>{props.listNmae[props.titleNo]}</h4>
          <p>상세내용</p>
          <p>날자</p>
        </div>
    </>
  )
}

export default App;
