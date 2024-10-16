import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Slick Carousel styles

function DynamicSlides() {
    // State to manage the slide URLs
    const [slides, setSlides] = useState([
        "https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img2_master.jpg?v=1523",
        "https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img1_master.jpg?v=1523",
        "https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img3_master.jpg?v=1523",
    ]);

    // State to track if images are loaded
    const [loaded, setLoaded] = useState(false);

    // Function to preload images
    const preloadImages = (imageUrls) => {
        const promises = imageUrls.map(
            (url) =>
                new Promise((resolve) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = resolve; // Resolve when the image is loaded
                })
        );
        return Promise.all(promises);
    };

    // Preload the images when the component mounts
    useEffect(() => {
        preloadImages(slides).then(() => {
            setLoaded(true); // Set to true once all images are preloaded
        });
    }, [slides]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="slider-container" style={{ margin: '10px 0' }}>
            {loaded ? (
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index}  >
                            <img
                                className="flex "
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                style={
                                    {
                                        height: '600px'
                                    }
                                }
                            />
                        </div>
                    ))}
                </Slider>
            ) : (
                <div>Loading images...</div> // Loading state while images are being preloaded
            )}
        </div>
    );
}

export default DynamicSlides;
