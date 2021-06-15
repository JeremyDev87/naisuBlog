import React, {useState} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './static/css/styles.css'
import './App.css';
import Data from './data.js';
import MainImg from './mainImg.js';

function App() {
  
  let [title,setTitle] = useState(['Portfolio','나이수TV','나누미크루','Blog']);
  let [like,setLike] = useState([0,0,0,0]);
  let [modal,setModal] = useState(false);
  let [detailNum,setDetailNum] = useState(0);
  let [input, setInput] = useState('');

  function saveTitle() {
    // alert("save");
    let tempArray = new Array();
    tempArray = [...title];
    tempArray.unshift(input);
    setTitle(tempArray);
  }

  function clickTitle(obj){

    if(modal===false){
      setDetailNum(obj);
      setModal(true);
    }else if(modal===true && detailNum===obj){
      setModal(false);
    }else{
      setDetailNum(obj);
    }
  }

  function clickLike(obj){
    let likeArray = new Array();
    likeArray = [...like];
    likeArray[obj] = likeArray[obj]+1;
    setLike(likeArray);
  }

  function Modal(props){
    return(
      <div className="container mx-auto mt-8 bg-red-50 p-8">
      <div className="flex items-center justify-evenly border-b border-gray-500">
        <p className="absolute m-4 text-lg font-medium w-full">{props.title[detailNum]}</p>
        <p className="m-4 text-sm font-light w-full text-right">발행일</p>
      </div>
      <div className="mt-6">
        <p className="m-4 text-sm font-light w-full">내용</p>
      </div>
    </div>
    )
  }

  return (
    <div className="App pt-28">
      <div className="container mx-auto flex-col flex text-left mt-3">
        <MainImg/>
        <div className="flex-col mt-3">
          <span className="font-bold text-3xl text-gray-400 hover:text-gray-800">Welcome to Jeremy Winchester's Home</span>
          <div className="flex justify-between mt-4 items-center h-full text-sm font-light">
            <p className="mx-3 px-5 border-r w-1/3 h-full border-gray-200 text-gray-600 hover:text-black text-right">
              아들이자 남편이고 아빠이며<br/>
              Web시스템 개발자이며<br/>
              육아,개발,리뷰,일상을 담는 유투버이며<br/>
              서울 이천으로 장거리 출퇴근하는 직장인이며<br/>
              Jeremy Winchester입니다.
            </p>
            <p className="mx-3 p-5 border-r w-1/3 h-full  border-gray-200 text-gray-600 hover:text-black text-center">
              시스템/홈페이지/각종 개발이 필요하실 때<br/>
              컨설팅과 견적이 필요하실 때<br/>
              친절하고 적극적으로 상담해 드립니다.
            </p>
            <p className="mx-3 p-5 w-1/3 text-gray-600 hover:text-black text-left">
              본 홈페이지는 <br/>
              Jeremy Winchester 단독 자체 개발로<br/>
              React.js, Tailwind CSS, Node.js, Express로<br/>
              구축하였습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
