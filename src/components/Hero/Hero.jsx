import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";

const HeroData = [
  {
      id: 1,
      img: Image1,
      subtitle: "Beats solo",
      title: "Wirless",
      title2: "Headphone"
  },
  {
      id: 2,
      img: Image2,
      subtitle: "Beats solo",
      title: "Wirless",
      title2: "Virtual"
  },
  {
      id: 3,
      img: Image3,
      subtitle: "Beats solo",
      title: "Branded",
      title2: "Laptops"
  }
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center">
      <div className="w-full">
        {/* Hero section */}
        <Slider {...settings}>
          {
            HeroData.map((data) =>(
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                  <div>
                    <h1>{data.subtitle}</h1>
                    <h1>{data.title}</h1>
                    <h1>{data.title2}</h1>
                    <div>
                      <button>Shop Now</button>
                    </div>
                  </div>
                {/* Img section */}
                <div>
                  <div>
                    <img src={data.img} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"/>
                  </div>
                </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
