import React, { useState, useEffect } from "react";
import "./FeaturesSection.scss";
import ColorThief from "colorthief";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";

const FeaturesSection = () => {
  const cardData = [
    {
      image:
        "https://sellerscommerce.com/wp-content/uploads/2023/08/retail-commerce-1.png",
      title: "Retail Commerce",
      description:
        "B2C shopping experience with the power of B2B private selling",
      link: "Retail Commerce",
    },
    {
      image:
        "https://sellerscommerce.com/wp-content/uploads/2023/08/company-stores-1.png",
      title: "Company Stores",
      description: "Manage employee stores with customized purchasing programs",
      link: "Company Stores",
    },
    {
      image:
        "https://sellerscommerce.com/wp-content/uploads/2023/08/Wholesale-Commerce-1.png",
      title: "Wholesale Commerce",
      description: "Customized B2B ordering with hassle-free experience",
      link: "Wholesale Commerce",
    },
    {
      image:
        "https://sellerscommerce.com/wp-content/uploads/2023/08/Multistore-Ecommerce.png",
      title: "Multistore Ecommerce",
      description:
        "Expand reach with multiple stores while managing everything centrally",
      link: "Multistore Ecommerce",
    },
    {
      image:
        "https://sellerscommerce.com/wp-content/uploads/2023/08/White-Label-Ecommerce.png",
      title: "White Label Ecommerce",
      description:
        "Custom branded ecommerce platform minus the cost of development",
      link: "White Label Ecommerce",
    },
    {
      image:
        "https://sellerscommerce.com/wp-content/uploads/2023/09/Frame-1686560890.png",
      title: "Catalog as a Service",
      description: "Get the latest product information direct from suppliers",
      link: "Catalog as a Service",
    },
  ];

  const industriesData = [
    {
      image:
        "https://sellerscommerce.com/wp-content/uploads/2023/05/Group-1000005281.png",
      title: "Uniforms and Gear",
      description:
        "Our highly agile platform is specifically designed to cater to the diverse needs of uniform sellers across various industries.",
    },
    {
      image:
        "https://sellerscommerce.com/wp-content/uploads/2023/05/Medical-1-1.png",
      title: "Medical Equipment",
      description:
        "Our all-inclusive agile platform is designed to meet the diverse requirements of medical equipment sellers.",
    },
    {
      image:
        "https://sellerscommerce.com/wp-content/uploads/2023/06/uniform-footwear-and-gear.png",
      title: "Promotional Products",
      description:
        "Designed with utmost agility, our platform is tailored to cater to the needs of promotional product sellers.",
    },
    {
      image:
        "https://sellerscommerce.com/wp-content/uploads/2023/05/Group-1000005282.png",
      title: "Fasteners",
      description:
        "We provide a comprehensive platform for launching your online fastener store with all the necessary features integrated into the system.",
    },
  ];

  const [borderColors, setBorderColors] = useState([]); // Store border colors dynamically

  useEffect(() => {
    const colorThief = new ColorThief();
    const colors = [];

    const loadImageColors = async () => {
      const imgElements = document.querySelectorAll(".industry-image");
      imgElements.forEach((img, index) => {
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          const color = colorThief.getColor(img);
          colors[index] = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
          if (colors.length === industriesData.length) {
            setBorderColors(colors);
          }
        };
      });
    };

    loadImageColors();
  }, [industriesData]);

  return (
    <>
      {/* Card Section */}
      <div className="card-layout">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <h3 className="title">{card.title}</h3>
            <p className="description">{card.description}</p>
            <a href="#" className="link">
              {card.link}
            </a>
          </div>
        ))}
      </div>

      {/* Integration Section */}
      <div className="integration-section">
        <div className="text-content">
          <h2>
            Seamlessly connect your <span>business systems</span>
          </h2>
          <p className="section-description">
            SellersCommerce integrates with your enterprise applications,
            back-end systems, and other cloud applications. We rely on our
            well-documented Open API architecture and use a no-code approach to
            ensure integrations don't become impediments to your ecommerce
            success.
          </p>
          <button className="explore-button">Explore Integrations</button>
        </div>
        <div className="image-content">
          <img
            src="https://www.sellerscommerce.com/wp-content/uploads/2023/09/Integration.webp"
            alt="Integration"
            className="integration-image"
          />
        </div>
      </div>

      {/* Industries Section */}

      <div className="industries-section">
        <h2 className="section-title">
          Industries <span>we serve</span>
        </h2>
        <p className="section-description">
          Whether you are thinking about replatforming or embarking on a digital
          transformation journey, SellersCommerce is a proven platform and
          trusted partner for manufacturers, distributors, and wholesalers.
        </p>
        <div className="industry-cards">
          {industriesData.map((industry, index) => (
            <div
              key={index}
              className="industry-card"
              style={{
                borderColor: borderColors[index] || "#e0e0e0",
              }}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="industry-image"
              />
              <h3 className="industry-title">{industry.title}</h3>
              <p className="industry-description">{industry.description}</p>
              <div>
                <a href="#" className="industry-link">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* Add New Section with Image and Content */}
       <div className="image-content-section">
        <div className="container">
          <div className="image-content-wrapper">
            {/* Image Section */}
            <div className="section-image">
              <img
                src="https://www.sellerscommerce.com/wp-content/uploads/2023/09/Group-1000005277.webp"
                alt="Business Agility"
              />
               <button>Schedule Consultation</button>

            </div>

            {/* Content Section */}
            <div className="section-content">
              <h2 className="content-title">
                Unlock business agility through <p className="content-title1">our success services</p>
              </h2>
              <p className="content-description">
                Why spend a fortune on implementation and wait an eternity to go
                live when you can accelerate digitalization at a fraction of the
                cost. Our in-house professional services team will create a
                customized plan designed around your launch requirements and
                business goals.
              </p>
            </div>
          </div>
        </div>
        <TestimonialSlider/>
      </div>
    </>
  );
};

export default FeaturesSection;
