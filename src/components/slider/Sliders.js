import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import axios from "axios";
import "./sliders.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Sliders() {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [data]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2
    };

    return (
        <section className="section">
            <Slider {...settings}>

                    {data.map(item => (
                        <figure key={item.id}>
                            <img src={item.image} alt={item.title} className="slider__img"/>
                        </figure>
                    ))}

            </Slider>
        </section>
    );

}

export default Sliders;