import React, { useState } from 'react';


const NanumiNanumDiv = () => {
    let [agreeChk, setAgreeChk] = useState([false,false,false]);
    let [nanumReady, setNanumReady] = useState(false);

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
            setNanumReady(true);
        }else{
            setNanumReady(false);
        }
    }


    return (
        <div className="h-full static container mx-auto text-gray-600 text-center">
            <div className="my-5 border-b border-gray-200">
                <p className="mb-5">
                    나누미 크루의 나눔 활동 <br/>
                    나눔이 필요하다면 언제든지 신청해주세요. <br/>
                </p>
            </div>
            <div className="flex justify-items-center mt-10">
                <div className="w-full text-right mr-5 flex flex-col">
                    <div className="flex justify-center items-center">
                        <span className="py-2 my-2 w-1/5 mr-3">나눔 지역</span>
                        <div className="border-l boder-gray-700"></div>
                        <input className="border-b p-2 border-gray-400 w-4/5 py-2 my-2 ml-3 " type="text" placeholder="서울특별시 영등포구"/>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="py-2 my-2 w-1/5 mr-3">신청자 이름</span>
                        <div className="border-l boder-gray-700"></div>
                        <input className="border-b p-2 border-gray-400 w-4/5 py-2 my-2 ml-3" type="text" placeholder="홍길동"/>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="py-2 my-2 w-1/5 mr-3">E-mail 또는 연락처</span>
                        <div className="border-l boder-gray-700"></div>
                        <input className="border-b p-2 border-gray-400 w-4/5 py-2 my-2 ml-3" type="text" placeholder="nanumi@crew.com / 010-1234-5678"/>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="py-10 my-2 w-1/5 mr-3">필요한 나눔</span>
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
                    <label htmlFor="joinAgreeChk3" className="border-b border-white hover:border-gray-400">입력한 내용을 기반으로 나누미크루 나눔을 신청합니다.</label>
                </div>
                {   
                    nanumReady
                    ? <button className="border-b-2 border-white py-2 hover:border-gray-400 font-bold" id="joinBtn">나눔 신청하기</button>
                    : <button className="border-b-2 border-white py-2 font-normal" disabled>위 항목들을 동의해주세요.</button>
                }
            </div>
        </div>
    )
}

export default NanumiNanumDiv;