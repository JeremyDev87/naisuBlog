const nanumiJoinDiv = () => {
    return (
        <div className="h-full static container mx-auto text-gray-600 text-center">
            <div className="my-5">
                <p>
                    나누미 크루의 가입 승인은 <br/>
                    매월 1일에 승인 절차를 진행하고 <br/>
                    가입 검토에 참여한 기존 크루원 중 <br/>
                    50% 이상의 동의를 받는 사람만 가입할 수 있으며<br/>
                    가입 거부된 신청자는 재신청할 수 있습니다.<br/>
                </p>
            </div>
            <div className="flex justify-items-center mt-10">
                <div className="w-full text-right mr-5 flex flex-col">
                    <div className="flex justify-center">
                        <span className="py-2 my-2 w-1/4 mr-3">거주 지역</span>
                        <div className="border-l boder-gray-700"></div>
                        <input className="border-b border-gray-400 w-3/4 py-2 my-2 ml-3 " type="text" placeholder="서울특별시 영등포구"/>
                    </div>
                    <div className="flex justify-center">
                        <span className="py-2 my-2 w-1/4 mr-3">이름</span>
                        <div className="border-l boder-gray-700"></div>
                        <input className="border-b border-gray-400 w-3/4 py-2 my-2 ml-3" type="text" placeholder="홍길동"/>
                    </div>
                    <div className="flex justify-center">
                        <span className="py-2 my-2 w-1/4 mr-3">E-mail</span>
                        <div className="border-l boder-gray-700"></div>
                        <input className="border-b border-gray-400 w-3/4 py-2 my-2 ml-3" type="email" placeholder="nanumi@crew.com"/>
                    </div>
                    <div className="flex justify-center">
                        <span className="py-10 my-2 w-1/4 mr-3">자기 소개</span>
                        <div className="border-l boder-gray-700"></div>
                        <textarea className="py-10 my-2 w-3/4 border-b border-gray-400 ml-3 resize-none"/>
                    </div>
                    <div className="flex justify-center">
                        <span className="py-10 my-2 w-1/4 mr-3">보유 재능</span>
                        <div className="border-l boder-gray-700"></div>
                        <textarea className="py-10 my-2 w-3/4 border-b border-gray-400 ml-3 resize-none"/>
                    </div>
                    <div className="flex justify-center">
                        <span className="py-10 my-2 w-1/4 mr-3">하고싶은 활동</span>
                        <div className="border-l boder-gray-700"></div>
                        <textarea className="py-10 my-2 w-3/4 border-b border-gray-400 ml-3 resize-none"/>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-right mr-5">
                <button className="border-b border-white hover:border-gray-400">가입 신청하기</button>
            </div>
        </div>
    )
}

export default nanumiJoinDiv;