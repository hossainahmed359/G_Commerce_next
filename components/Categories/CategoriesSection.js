import React, { useRef } from 'react';
import Slider from "react-slick";
import CategoryItem from './CategoryItem';

// Font awesome
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons 
import { faAngleLeft, faAngleRight, } from "@fortawesome/free-solid-svg-icons";


/* ******************* Main function ******************* */
export default function CategoriesSection() {
    const sliderRef = useRef(null)

    // ******** Common styles of Prev and Next buttons
    const arrowStyles = {

        padding: '4px'
    }

    // ******** Next Button
    const NextBtn = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <FontAwesomeIcon
                    icon={faAngleRight}
                    className="slick-arrow"
                    style={arrowStyles}
                />
            </div>
        )
    };

    // ******** Previous Button   
    const PrevBtn = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="slick-arrow"
                    style={arrowStyles}
                />
            </div>
        )
    };




    // ******** Slider settings

    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="section-products-carousel" id="homev12-carousel-1">
                {/******** Header ********/}
                <header className="section-header">
                    <h2 className="section-title">Featured Categories</h2>
                    <div className="slider_control_options">
                        <div className='d-flex'>
                            <PrevBtn onClick={() => sliderRef.current.slickPrev()} />
                            <NextBtn onClick={() => sliderRef.current.slickNext()} />
                        </div>
                    </div>
                </header>

                {/******** Slider  Section ********/}
                <div className="products-carousel" id="new-arrival-carousel" data-ride="tm-slick-carousel" data-wrap=".products" data-slick="{&quot;infinite&quot;:false,&quot;slidesToShow&quot;:8,&quot;slidesToScroll&quot;:8,&quot;dots&quot;:true,&quot;arrows&quot;:true,&quot;prevArrow&quot;:&quot;&lt;a href=\&quot;#\&quot;&gt;&lt;i className=\&quot;tm tm-arrow-left\&quot;&gt;&lt;\/i&gt;&lt;\/a&gt;&quot;,&quot;nextArrow&quot;:&quot;&lt;a href=\&quot;#\&quot;&gt;&lt;i className=\&quot;tm tm-arrow-right\&quot;&gt;&lt;\/i&gt;&lt;\/a&gt;&quot;,&quot;appendArrows&quot;:&quot;#homev12-carousel-1 .custom-slick-nav&quot;,&quot;responsive&quot;:[{&quot;breakpoint&quot;:650,&quot;settings&quot;:{&quot;slidesToShow&quot;:1,&quot;slidesToScroll&quot;:1}},{&quot;breakpoint&quot;:780,&quot;settings&quot;:{&quot;slidesToShow&quot;:3,&quot;slidesToScroll&quot;:3}},{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;:4,&quot;slidesToScroll&quot;:4}},{&quot;breakpoint&quot;:1400,&quot;settings&quot;:{&quot;slidesToShow&quot;:6,&quot;slidesToScroll&quot;:6}}]}">
                    <div className="container-fluid">
                        <div className="woocommerce ">
                            {/******** Slider ********/}
                            <Slider ref={sliderRef} {...settings} className="products">
                                {Array(90).fill('').map((_, item) => {
                                    return (
                                        <>
                                            <CategoryItem
                                                key={Array[item]}
                                                link={'https://www.google.com/'}
                                                imageSource={'https://i.ibb.co/5Ggw11D/10-7.jpg'}
                                                categoryTitle={'Category'}
                                            />
                                        </>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
