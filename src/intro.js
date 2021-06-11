const IntroDiv = () => {
    return (
        <div className="h-full static container mx-auto">
            <div className="w-full pt-40">
                <p className="text-4xl text-gray-500 text-center">하고 싶은 게 많다보니 하는게 많습니다. 하는게 많다보니 하고 싶은게 더 많아집니다.</p>
                <p className="text-xl text-gray-300 text-center"> Jeremy Winchester는 온라인 상에서 사용하는 예명이며 해외 Business에 있어 영어이름으로 사용합니다. </p>
            </div>
            <div className="flex justify-evenly pt-10 text-gray-600">
                <div className="w-1/4 text-right mr-8">
                    <span>Web Developer</span>
                </div>
                <div className="border-r border-l border-gray-400">
                </div>
                <div className="w-3/4 xl:text-left ml-8 flex flex-col">
                    <span className="font-bold">Front-End</span>
                    <span className="font-light mb-2">HTML5,CSS3,Javascript(ES6), SCSS,Bootstrap,Tailwind CSS, React.js React Native</span>
                    <span className="font-bold">Back-End</span>
                    <span className="font-light">Node.js, ASP, Python(Django)</span>
                </div>
            </div>
            <div className="flex justify-evenly pt-10 text-gray-600">
                <div className="w-1/4 text-right mr-8">
                    <span>System Consulting</span>
                </div>
                <div className="border-r border-l border-gray-400">
                </div>
                <div className="w-3/4 xl:text-left ml-8 flex flex-col">
                    <span className="font-bold">Consulting</span>
                    <span className="font-light mb-2">Echo, Marketing, IoT, Kiosk, Infra, Range, Cost</span>
                    <span className="font-bold">Architecture</span>
                    <span className="font-light">Process, Database, Object</span>
                </div>
            </div>
            <div className="flex justify-evenly pt-10 text-gray-600">
                <div className="w-1/4 text-right mr-8">
                    <span>Youtube</span>
                </div>
                <div className="border-r border-l border-gray-400">
                </div>
                <div className="w-3/4 xl:text-left ml-8 flex flex-col">
                    <span className="font-bold">나이수TV</span>
                    <span className="font-light mb-2">육아,개발,리뷰,정보,시사</span>
                </div>
            </div>
            <div className="flex justify-evenly pt-10 text-gray-600">
                <div className="w-1/4 text-right mr-8">
                    <span>나누미크루</span>
                </div>
                <div className="border-r border-l border-gray-400">
                </div>
                <div className="w-3/4 xl:text-left ml-8 flex flex-col">
                    <span className="font-bold">talent donation</span>
                    <span className="font-light mb-2">IT, 교육, 노무, 재무, 의료, 영상, 디자인, 홍보</span>
                    <span className="font-bold">Volunteer activity</span>
                    <span className="font-light">장애인, 아동</span>
                </div>
            </div>
            <div className="flex justify-evenly pt-10 text-gray-600">
                <div className="w-1/4 text-right mr-8">
                    <span>Team.Dado</span>
                </div>
                <div className="border-r border-l border-gray-400">
                </div>
                <div className="w-3/4 xl:text-left ml-8 flex flex-col">
                    <span className="font-bold">웹시스템 구축</span>
                    <span className="font-light mb-2">Consulting, Design, Development, Service, Maintenance</span>
                </div>
            </div>
        </div> 
    )
}

export default IntroDiv;