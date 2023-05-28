import React from 'react';
import "./index.css";
import "../../index.css";
import Carousel from 'react-multi-carousel';
import CardFlip from 'react-card-flip';
import 'react-multi-carousel/lib/styles.css';

function HomeCarousel() {
    const divStyle = {
        left: '6%',
        padding: '10px',
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const sliderImageUrl = [
        //First image url
        {
            url:
                "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
        },
        {
            url:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
        },
        //Second image url
        {
            url:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
        },
        //Third image url
        {
            url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
        },

        //Fourth image url

        {
            url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
        }
    ];

    return (
        <div>
            <div className="wd-content" style={divStyle}>
                <div class="wd-text-container">
                    Latest Releases
                </div>
            </div>
            <div className="parent">
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    infinite={true}
                    partialVisible={false}
                >
                    {sliderImageUrl.map((imageUrl, index) => {
                        return (
                            // <CardFlip>
                                <div className="slider p-0 m-0" key={index}>
                                    <img src={imageUrl.url} alt="movie" />
                                </div>
                            // </CardFlip>
                        );
                    })}
                </Carousel>
            </div >
            <div className="wd-content" style={divStyle}>
                <div class="wd-text-container">
                    Top Pics
                </div>
            </div>
            <div className="parent">
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    infinite={true}
                    partialVisible={false}
                >
                    {sliderImageUrl.map((imageUrl, index) => {
                        return (
                            // <CardFlip>
                                <div className="slider p-0 m-0" key={index}>
                                    <img src={imageUrl.url} alt="movie" />
                                </div>
                            // </CardFlip>
                        );
                    })}
                </Carousel>
            </div >
        </div >
    );
}
export default HomeCarousel;