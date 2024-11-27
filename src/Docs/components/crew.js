import React, { useEffect, useState } from 'react';
import Logo from './logo';
import '../style/component_style/crew.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Crew() {
    const [getData,setGetData] = useState([])
    useEffect(() => {
        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            navigation: true,
            pagination: { clickable: true },
            loop: true,
        });
    }, []);

    // fetch data from api
    fetch("https://reqres.in/api/users?page=2").then((e) => e.json())
    .then((result) => setGetData(result.data))
    .catch((er) => console.log("you have problem in fetch"))
    return (
        <div className="crew">
            <div className="header">
                <Logo size="90" space="20px" />
                <h4>
                    "نظام POS هذا كان نقلة نوعية في إدارة متجري. بفضل تقارير الأرباح والمخزون الفورية، قدرت أتابع تفاصيل العمل بدقة واتخذ قرارات أسرع!"
                </h4>
            </div>

            <div className="swiper">
                <div className="swiper-wrapper">
                    {getData.map((e,i) => 
                    <div key={i} className="swiper-slide">
                        <div className='card'>
                            <div className='person-img' style={{backgroundImage: `url(${e.avatar})`}}></div>
                            <h5>{`${e.first_name} ${e.last_name}`}</h5>
                        </div>
                    </div>
                    )}
                </div>
            </div>
                <div className='navigation'>
                    <button>
                    <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
        </div>
    );
}
