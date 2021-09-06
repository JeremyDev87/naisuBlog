import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import JWCI_Black from '../img/JW_CI_Black.png';


const MobileNav = (props) => {

    let [isMobile,setIsMobile] = useState(props.navOpen);

    if(isMobile){
        return (
            <div className="bg-gray-50 fixed w-2/3  h-screen text-center shadow-2xl">
                <div className="py-1 items-center flex justify-between mx-4 border-b border-gray-200" onClick={()=>{setIsMobile(false)}}>
                    <div className="flex">
                        <img src={JWCI_Black} className="w-7 contain mr-2" />
                        <span>Jeremy<br/>Winchester</span>
                    </div>
                    <button className="font-extrabold mr-0">X</button>
                </div>
                <ul className="flex-col item-center text-center justify-evenly" onClick={()=>{setIsMobile(false)}}>
                    <Link to="/naisuBlog"><li className="text-lg py-5 px-full mx-auto">Home</li></Link>
                    <Link to="/naisuBlog/intro"><li className="text-lg py-5 px-full mx-auto">Intro</li></Link>
                    <Link to="/naisuBlog/portfolio"><li className="text-lg py-5 px-full mx-auto">Portfolio</li></Link>
                    {/* <Link to="/naisuBlog/shop"><li className="text-lg py-5 px-full mx-auto">제이스토어</li></Link> */}
                    <Link to="/naisuBlog/naisuTV"><li className="text-lg py-5 px-full mx-auto">나이수TV</li></Link>
                    {/* <Link to="/naisuBlog/nanumicrew"><li className="text-lg py-5 px-full mx-auto">나누미크루</li></Link> */}
                    <Link to="/naisuBlog/blog"><li className="text-lg py-5 px-full mx-auto">Blog</li></Link>
                </ul>
            </div>
        )
    }else{
        return (
            <div></div>
        )
    }
}

export default MobileNav;