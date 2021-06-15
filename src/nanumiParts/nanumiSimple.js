import { Link,Router } from 'react-router-dom';

const NanumiSimpleDiv = () => {
    return (
        <div className="h-full static container mx-auto text-gray-600 text-center">
            <div className="w-full md:pt-40 pt-20">
                <div className="ml-3 text-4xl font-bold">
                    <span className="text-gray-800">나누미크루</span>
                </div>
            </div>
            <div className="w-full mt-5 py-5 font-bold flex justify-evenly">
                <Link to="/nanumicrew/join"><span className="border-b border-white pb-2 hover:border-gray-400">크루 가입 신청</span></Link>
                <Link to="/nanumicrew/nanum"><span className="border-b border-white pb-2 hover:border-gray-400">나누미 신청</span></Link>
                <Link to="/nanumicrew/qna"><span className="border-b border-white pb-2 hover:border-gray-400">크루 관련 문의</span></Link>
            </div>


        </div> 
    )
}

export default NanumiSimpleDiv;