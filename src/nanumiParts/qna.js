import React, { useState } from 'react';


const NanumiQnaDiv = () => {
    return (
        <div className="h-full static container mx-auto text-gray-600 text-center">
            <div className="my-5 border-b border-gray-200">
                <p className="mb-5">
                    나누미 크루에게 물어보세요 <br/>
                </p>
            </div>
            <div className="flex justify-items-center mt-10">
                <div className="w-full text-right mr-5 flex flex-col">
                    <div className="flex justify-center items-center">
                        <span className="py-10 my-2 w-1/5 mr-3">문의 내용</span>
                        <div className="border-l boder-gray-700"></div>
                        <textarea className="p-2 my-2 w-4/5 ml-3 resize-none bg-gray-100 rounded-lg" rows="15"/>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex-col justify-end mr-5 text-right">
                <button className="border-b-2 border-white py-2 hover:border-gray-400 font-bold" id="joinBtn">문의 등록하기</button>
            </div>
        </div>
    )
}

export default NanumiQnaDiv;