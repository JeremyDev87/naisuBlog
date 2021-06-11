import { Link } from 'react-router-dom';
import JWCI from '../img/JW_CI.png';

const TopBar =()=>{
    return (
        <div className="w-full flex justify-between items-center shadow-md fixed bg-white">
            <div className="ml-4 text-xl w-1/5">
                <Link to="/">
                    <span className="font-bold text-gray-600 flex items-center">
                        {/* <i className="fab fa-js-square mr-2 fa-lg"></i> */}
                        
                        <img src={JWCI} class="w-5 mr-2" />
                        Jeremy Winchester
                    </span>
                </Link>
            </div>
            <div className="mr-4 text-xl text-gray-500 w-4/5 md:block hidden">
                <ul className="flex item-center justify-evenly">
                    <li className="navLink"><Link to="/intro">Intro</Link></li>
                    <li className="navLink"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="navLink"><Link to="/naisuTV">나이수TV</Link></li>
                    <li className="navLink"><Link to="/nanumicrew">나누미크루</Link></li>
                    <li className="navLink"><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            <div className="block md:hidden mr-5">
                <a href=""><i className="fas fa-bars fa-lg"></i></a>
            </div>
        </div>
    )
}

export default TopBar;