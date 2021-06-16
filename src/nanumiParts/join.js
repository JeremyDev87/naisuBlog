import React, { useState } from 'react';


const NanumiJoinDiv = () => {
    let [agreeChk, setAgreeChk] = useState([false,false,false]);
    let [joinReady, setJoinReady] = useState(false);


    const clickBtn = () => {
        let inputContents = document.getElementById("joinContents");
        // console.log(inputContents);
        let inputAll = inputContents.querySelectorAll("input");
        for(let i=0;i<inputAll.length;i++){
            console.log(inputAll[i].value);
        }
        let textareaAll = inputContents.querySelectorAll("textarea");
        for(let i=0;i<textareaAll.length;i++){
            console.log(textareaAll[i].value);
        }
        // alert("가입신청 처리 개발 예정");
    }

    const clickAgree = (obj) => {
        let tempArray = [...agreeChk];
        if(tempArray[obj]){
            tempArray[obj] = false;
        }else{
            tempArray[obj] = true;
        }
        setAgreeChk(tempArray);

        let agreeCnt=0;
        for(let i=0;i<tempArray.length;i++){
            if(tempArray[i]){
                agreeCnt+=1;
            }
        }
        if(agreeCnt===3){
            setJoinReady(true);
        }else{
            setJoinReady(false);
        }
    }


    return (
        <div className="h-full static container mx-auto text-gray-600 text-center">
            <div className="my-5 border-b border-gray-200">
                <p className="mb-5">
                    나누미 크루의 가입 승인은 <br/>
                    매월 1일에 승인 절차를 진행하고 <br/>
                    가입 검토에 참여한 기존 크루원 중 <br/>
                    50% 이상의 동의를 받는 사람만 가입할 수 있으며<br/>
                    가입 거부된 신청자는 재신청할 수 있습니다.<br/>
                </p>
            </div>
            <div className="flex justify-items-center mt-10" id="joinContents">
                <div className="w-full text-right mr-5 flex flex-col">
                    <div className="flex justify-center items-center">
                        <span className="py-2 my-2 w-1/5 mr-3">거주 지역</span>
                        <div className="border-l boder-gray-700"></div>
                        <input className="border-b p-2 border-gray-400 w-4/5 py-2 my-2 ml-3 " type="text" placeholder="서울특별시 영등포구"/>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="py-2 my-2 w-1/5 mr-3">이름</span>
                        <div className="border-l boder-gray-700"></div>
                        <input className="border-b p-2 border-gray-400 w-4/5 py-2 my-2 ml-3" type="text" placeholder="홍길동"/>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="py-2 my-2 w-1/5 mr-3">E-mail</span>
                        <div className="border-l boder-gray-700"></div>
                        <input className="border-b p-2 border-gray-400 w-4/5 py-2 my-2 ml-3" type="email" placeholder="nanumi@crew.com"/>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="py-10 my-2 w-1/5 mr-3">자기 소개</span>
                        <div className="border-l boder-gray-700"></div>
                        <textarea className="p-2 my-2 w-4/5 ml-3 resize-none bg-gray-100 rounded-lg" rows="10"/>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="py-10 my-2 w-1/5 mr-3">보유 재능</span>
                        <div className="border-l boder-gray-700"></div>
                        <textarea className="p-2 my-2 w-4/5 ml-3 resize-none bg-gray-100 rounded-lg" rows="10"/>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="py-10 my-2 w-1/5 mr-3">하고싶은 활동</span>
                        <div className="border-l boder-gray-700"></div>
                        <textarea className="p-2 my-2 w-4/5 ml-3 resize-none bg-gray-100 rounded-lg" rows="10"/>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex-col justify-end mr-5 text-right">
                <div className="py-2 font-light">
                    <input type="checkbox" className="mr-3" id="joinAgreeChk1" onClick={()=>{clickAgree(0)}} value={agreeChk[0]}/>
                    <label htmlFor="joinAgreeChk1" className="border-b border-white hover:border-gray-400">신청 결과 통보 용도의 개인정보제공에 동의합니다.</label>
                </div>
                <div className="py-2 font-light">
                    <input type="checkbox" className="mr-3" id="joinAgreeChk2" onClick={()=>{clickAgree(1)}}  value={agreeChk[1]}/>
                    <label htmlFor="joinAgreeChk2" className="border-b border-white hover:border-gray-400">입력한 내용이 허위사실일 경우 취소처리될 수 있음에 동의합니다.</label>
                </div>
                <div className="py-2 font-light">
                    <input type="checkbox" className="mr-3" id="joinAgreeChk3" onClick={()=>{clickAgree(2)}}  value={agreeChk[2]}/>
                    <label htmlFor="joinAgreeChk3" className="border-b border-white hover:border-gray-400">입력한 내용을 기반으로 나누미크루 가입을 신청합니다.</label>
                </div>
                {   
                    joinReady
                    ? <button className="border-b-2 border-white py-2 hover:border-gray-400 font-bold" onClick={clickBtn} id="joinBtn">가입 신청하기</button>
                    : <button className="border-b-2 border-white py-2 font-normal" disabled>위 항목들을 동의해주세요.</button>
                }
            </div>
        </div>
    )
}

export default NanumiJoinDiv;