// import React, { useState, useEffect } from "react";
// import "./TestimonialSlider.scss";

// const TestimonialSlider = () => {
//   const testimonials = [
//     {
//       name: "Angello G",
//       title: "Manager",
//       stars: 5,
//       reviewTitle: "Solved my long hunt for suitable B2B ecommerce platform",
//       review:
//         "I have used two solutions before stumbling upon SellersCommerce, their B2B platform had 90% of the custom features that we wanted. It was not pricey compared to the previous two solutions we have used. I also liked that I could have all or most of the items I wanted and do offer from all the different catalogs I get inventory from. The user interface for administrators is user-friendly and easy to navigate.",
//       image:
//         "https://www.sellerscommerce.com/wp-content/uploads/2023/05/user-feedback-2.png", // Placeholder for a profile image
//     },
//     {
//       name: "Jane D",
//       title: "Director",
//       stars: 4,
//       reviewTitle: "Streamlined my ecommerce operations",
//       review:
//         "SellersCommerce provided the perfect platform to centralize all our stores and streamline operations. The user interface is extremely intuitive, and their support team has been amazing throughout the setup.",
//       image:
//         "https://www.sellerscommerce.com/wp-content/uploads/2023/05/user-feedback-1.png", // Placeholder for another profile image
//     },
//     {
//       name: "Mark P",
//       title: "Business Owner",
//       stars: 5,
//       reviewTitle: "Best investment for our online business",
//       review:
//         "After trying multiple ecommerce platforms, SellersCommerce exceeded our expectations. Their features are robust and customizable. It's been a game-changer for us!",
//       image:
//         "https://www.sellerscommerce.com/wp-content/uploads/2023/05/user-feedback-3.png", // Placeholder for another profile image
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonialCount = testimonials.length;

//   // Automatically slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [testimonialCount]);

//   // Handlers for manual navigation
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + testimonialCount) % testimonialCount
//     );
//   };

//   return (
//     <div className="testimonial-slider">
//       <div className="testimonial-card">
//         {/* Navigation Arrows on Top-Right */}

//         <div className="testimonial-header">

//         <img
//             src={testimonials[currentIndex].image}
//             alt={testimonials[currentIndex].name}
//             className="profile-image"
//           />
//           <div>

//             <h3 className="name">{testimonials[currentIndex].name}</h3>
//             <p className="title">{testimonials[currentIndex].title}</p>
//             <div className="stars">
//               {"★".repeat(testimonials[currentIndex].stars)}
//             </div>
//             <h4 className="review-title">
//           {testimonials[currentIndex].reviewTitle}
//         </h4>
//         <p className="review">{testimonials[currentIndex].review}</p>

//           </div>

//         </div>
//         <div className="navigation-icons">
//           <button className="nav-button prev" onClick={handlePrev}>
//             &#8249; {/* Left arrow */}
//           </button>
//           <button className="nav-button next" onClick={handleNext}>
//             &#8250; {/* Right arrow */}
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

// TestimonialSlider.js
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./TestimonialSlider.scss";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Angello G",
      title: "Manager",
      stars: 5,
      reviewTitle: "Solved my long hunt for suitable B2B ecommerce platform",
      review:
        "I have used two solutions before stumbling upon SellersCommerce, their B2B platform had 90% of the custom features that we wanted. It was not pricey compared to the previous two solutions we have used. I also liked that I could have all or most of the items I wanted and do offer from all the different catalogs I get inventory from. The user interface for administrators is user-friendly and easy to navigate.",
      image:
        "https://www.sellerscommerce.com/wp-content/uploads/2023/05/user-feedback-2.png",
    },
    {
      name: "Jane D",
      title: "Director",
      stars: 4,
      reviewTitle: "Streamlined my ecommerce operations",
      review:
        "SellersCommerce provided the perfect platform to centralize all our stores and streamline operations. The user interface is extremely intuitive, and their support team has been amazing throughout the setup.",
      image:
        "https://www.sellerscommerce.com/wp-content/uploads/2023/05/user-feedback-1.png",
    },
    {
      name: "Mark P",
      title: "Business Owner",
      stars: 5,
      reviewTitle: "Best investment for our online business",
      review:
        "After trying multiple ecommerce platforms, SellersCommerce exceeded our expectations. Their features are robust and customizable. It's been a game-changer for us!",
      image:
        "https://www.sellerscommerce.com/wp-content/uploads/2023/05/user-feedback-3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const { name, title, stars, reviewTitle, review, image } =
    testimonials[currentIndex];

  return (
    <div className="testimonial-slider">
      <div className="testimonial-card">
        <div className="navigation">
          <button onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
        <div className="img-card">
          <img src={image} alt={name} className="profile-image" />
          <div className="testimonial-content">
            <h3>{name}</h3>

            <p className="title">{title}</p>

            <div className="stars">
              {Array.from({ length: stars }).map((_, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>
            <h4>{reviewTitle}</h4>
            <p>{review}</p>
          </div>
        </div>
      </div>
      <h1>Start your ecommerce journey today</h1>
      <button>Schedule Consultation</button>
    </div>
  );
};

export default TestimonialSlider;
