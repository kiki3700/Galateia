import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let post = '강남 우동 맛집'

  let [title, set_button] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [like, setLike] = useState(0)
  return (
    <div className="App">
      <div className = "black-nav">
        <h4 id = {post} style = {{color : 'red'}}>블로그임</h4>
      </div>
      <button onClick={()=>{
        let copy = [...title]
        copy.sort()
        set_button(copy)
      }}>정렬</button>
      <div className = "list">
          <h4>{title[0]} <span onClick={()=> {setLike(like+1)}}>따봉</span> {like}</h4>
          <span onClick={()=>{
            let copy = [...title]
            copy[0] = "여자코트 추천"
            set_button(copy)}}>수정</span>

          <p>2월 17일 발행</p>
      </div>      <div className = "list">
          <h4>{title[1]}</h4>
          <p>2월 17일 발행</p>
      </div>      <div className = "list">
          <h4>{title[2]}</h4>
          <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
