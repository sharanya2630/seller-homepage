
import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const images = [
        "https://www.sellerscommerce.com/wp-content/uploads/2023/05/image-2-1.png",
        "https://www.sellerscommerce.com/wp-content/uploads/2023/05/imag-1.png",
        "https://www.sellerscommerce.com/wp-content/uploads/2023/05/image-7.png",
        "https://www.sellerscommerce.com/wp-content/uploads/2023/05/image-5-1.png",
        "https://www.sellerscommerce.com/wp-content/uploads/2023/05/image-3-1.png",
        "https://www.sellerscommerce.com/wp-content/uploads/2023/05/image-4-1.png",
      ];
      const imageStyles = [
        { width: "80%", height: "auto", objectFit: "cover" },
        { width: "60%", height: "auto", objectFit: "cover" },
        { width: "60%", height: "auto", objectFit: "contain",marginTop:"-10px" },
        { width: "60%",height: "auto", objectFit: "cover" },
        { width: "60%", height: "auto", objectFit: "cover" },
        { width: "40%",height: "auto", objectFit: "cover" },
      ];
    
      const settings = {
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false, 
        responsive: [
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
     
    
      return (
        <div>

       
        <div className="carousel-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Slide ${index + 1}`}style={imageStyles[index]} 
                />
              </div>
            ))}
          </Slider>
        </div>
         <div className="content-section">
         <div className="image-section">
           <img
             src="https://www.sellerscommerce.com/wp-content/uploads/2023/09/Demo-image.webp"
             alt="Demo"
           />
          <button className="explore-btn1">Explore Plotform</button>

         </div>

         <div className="text-section">
           <h2 className="section-title">Ecommerce platform that is<br/><span style={{color: "#e58300"}}>purpose built for B2B
            </span> 
           </h2>
           <p>
             Our platform offers a wide array of features that make it
             purpose-built for B2B. Discover modern cloud architecture, modular
             platforms, and much more to transform your ecommerce experience.
           </p>
           <button className="explore-btn">Explore Plotform</button>
         </div>
        
       </div>
       <div className="counter-section">
                <div className="counter">
                    <h1>1200</h1>
                    <p>Customers</p>
                </div>
                <div className="counter">
                    <h1>5</h1>
                    <p>Shoppers</p>
                </div>
                <div className="counter">
                    <h1>3500</h1>
                    <p>Stores launched</p>
                </div>
                <div className="counter">
                    <h1>2</h1>
                    <p>GMV</p>
                </div>
            </div>
       </div>
      );
};

export default Carousel;
