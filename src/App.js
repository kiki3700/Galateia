import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function Header(){
  return <header>Journey To The West</header>
}

function Nav(){
  return <nav>
    <ol>
      <li><a href='/'>about</a></li>
      <li><a href='/'>article</a></li>
    </ol>
  </nav>
}
function Article(){ 
  return <p>"죠니! 「LESSON 5」야! 분명…다음은 「LESSON 5」다! 나는 이 스틸 볼 런 레이스에서 언제나 지름길만을 찾아왔지만 「한번은 멀리 돌아갔었지.」 「그곳이 나의 지름길이었어.」 이 대륙을 횡단하는 동안은 더욱 그랬었지. 그리고 네가 있었기에 그 길을 건너올 수 있었어."</p>
}
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
