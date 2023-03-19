import { useState } from "react";
import style from "../style"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { bestSellers } from "../constants";
import { NormalPrice, SalePrice, SaleTag, HotTag, CardOptions } from '../components';
import { Navigation, Pagination } from "swiper";
import { shirt } from "../assets";

const SliderProducts = () => {

  const [isHovering, setIsHovering] = useState(-1);
  const handleMouseOver = (item) => {
    setIsHovering(item);
  };

  const handleMouseOut = () => {
    setIsHovering(-1);
  };

  return (
    <section className={`${style.Xpadding} h-full pb-[6rem] pt-[6rem]`}>
      {/* Titles and categories */}
      <div className="flex justify-center items-center mb-10">
        <h2 className="text-[35px] tracking-widest font-roboto font-medium">Best sellers</h2>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-8 smm:hidden">
          <a href="">
            <h4 className="capitalize font-semibold font-sans">all products</h4>
          </a>
          <a href="">
            <h4 className="capitalize font-sans font-semibold text-[#777777]" onClick={() => {
              
            }}>t-shirt</h4>
          </a>
          <a href="">
            <h4 className="capitalize font-sans font-semibold text-[#777777]">hoodies</h4>
          </a>
          <a href="">
            <h4 className="capitalize font-sans font-semibold text-[#777777]">jacket</h4>
          </a>
        </div>
        <div className="hidden smm:flex justify-center items-center gap-2 bg-[#1E2832] px-4 py-1
        cursor-pointer">
          <img src={shirt} alt="filter" className="w-[16px] h-[16px]" />
          <h5 className="font-normal font-sans text-white">Products</h5>
        </div>
      </div>

      <Swiper
        breakpoints={{
          620: {
            slidesPerView: 2,
            slidesPerGroup: 2

          },
          1050: {
            slidesPerView: 2,
            slidesPerGroup: 2

          },
          1220: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1315: {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
        }}
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {bestSellers.map((product, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="relative mb-4" onMouseOver={() => { handleMouseOver(index); }} onMouseOut={handleMouseOut}>
                <img src={product.img} alt="product" className="w-full h-full jshover cursor-pointer" />
                {product.sale && <SaleTag />}
                {product.trend && <HotTag />}

                {isHovering === index && <CardOptions />}
              </div>
              <div className="flex justify-center flex-col px-3">
                <h3 className="captialize font-sans font-bold text-black mb-3">{product.title}</h3>
                {product.sale && <SalePrice category={product.category} price={product.price} salePrice={product.salePrice} />}
                {!product.sale && <NormalPrice category={product.category} price={product.price} />}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </section>
  )
}

export default SliderProducts
