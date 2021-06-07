import { useState } from 'react';
import main0 from './static/img/main0.jpeg';
import main1 from './static/img/main1.jpeg';
import main2 from './static/img/main2.jpeg';
import main3 from './static/img/main3.jpeg';

const MainSlide = () => {

    return (
        <div className="container mx-auto w-full p-2 m-3 flex items-center">
            <ul className="flex">
                <li>
                    <img id="mainImg" src={main0} className="object-cover h-96 p-0 m-0 w-full rounded-3xl  sm:rounded-r-none" />
                </li>
                <li>
                    <img id="mainImg" src={main1} className="object-cover h-96 p-0 m-0 w-full md:block hidden" />
                </li>
                <li>
                    <img id="mainImg" src={main2} className="object-cover h-96 p-0 m-0 w-full lg:block hidden" />
                </li>
                <li>
                    <img id="mainImg" src={main3} className="object-cover h-96 p-0 m-0 w-full rounded-r-3xl sm:block hidden" />
                </li>
            </ul>
        </div>
    )
}

export default MainSlide;