import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JWCI from '../img/JW_CI.png';
import TopBurger from './mobileNav.js';

const TopBar =()=>{
    let [mobileNav,setMobileNav] = useState(false);

    const clickBurger = () => {
        if(mobileNav){
            setMobileNav(false);
        }else{
            setMobileNav(true);
        }
    }

    const CIDiv = () => {
        return (
            <div className="ml-4 text-xl w-1/5 block">
            <Link to="/naisuBlog">
                <span className="font-bold text-gray-600 flex items-center">
                    <img src={JWCI} className="w-5 mr-2" />
                    Jeremy Winchester
                </span>
            </Link>
        </div>
        )
    }


    return (
        <div>
            <div className="w-full flex justify-between items-center shadow-md fixed bg-white">
                <CIDiv className="hidden md:block"/>
                <div className="mr-4  text-sm lg:text-xl text-gray-500 w-4/5 md:block hidden">
                    <ul className="flex item-center justify-evenly text-center">
                        <li className="navLink"><Link to="/naisuBlog/intro">Intro</Link></li>
                        <li className="navLink"><Link to="/naisuBlog/portfolio">Portfolio</Link></li>
                        <li className="navLink"><Link to="/naisuBlog/shop">나이수Mall</Link></li>
                        <li className="navLink"><Link to="/naisuBlog/naisuTV">나이수TV</Link></li>
                        <li className="navLink"><Link to="/naisuBlog/nanumicrew">나누미크루</Link></li>
                        <li className="navLink"><Link to="/naisuBlog/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="block md:hidden">
                    <button className="py-2 px-4 text-center mx-3" onClick={clickBurger}><i className="fas fa-bars fa-lg"></i></button>
                </div>
            </div>
            {
                mobileNav
                ?<TopBurger navOpen={true}/>
                :null
            }
            
        </div>
    )
}

export default TopBar;