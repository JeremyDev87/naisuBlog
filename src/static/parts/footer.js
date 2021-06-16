const footer = () => {
    return (
        <div className="w-full border-t border-gray-200 mt-8 flex flex-row items-center justify-items-center text-center mx-auto py-5 font-light text-gray-500">
            <p className="w-1/3">
                <a href="mailto:soundbrokaz@kakao.com"><i className="fas fa-envelope mr-2"></i>soundbrokaz@kakao.com</a>
            </p>
            <p className="w-1/3 my-10">
                <span className="mr-3">© Jeremy Winchester All Right Reserved.</span>
            </p>
            <p className="w-1/3">
                <a href="https://www.google.com/maps/place/%EC%8B%A0%EB%8F%84%EB%A6%BC%EC%97%AD/"><i className="fas fa-map-marked-alt mr-2"></i>서울특별시 영등포구</a>
            </p>
        </div>
    )
}

export default footer;