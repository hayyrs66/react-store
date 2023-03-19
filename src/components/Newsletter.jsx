import { useState } from "react";
import style from "../style";
import { newsLetter } from "../constants";
import { instagram } from "../assets";

const Newsletter = () => {

  const [isHovering, setIsHovering] = useState(-1);
  const handleMouseOver = (item) => {
    setIsHovering(item);
  };

  const handleMouseOut = () => {
    setIsHovering(-1);
  };

  return (
    <section className={`${style.Xpadding} h-full pb-[6rem] bg-[#F1F1F1]`}>
      <div className="flex justify-center items-center mb-10 pt-20">
        <h2 className="text-[35px] tracking-widest font-roboto font-medium
        text-center">
          Follow products and discounts on Instagram
        </h2>
      </div>
      {/* Here i have to fetch the instagram content but for now im 'bout to leaving
      this just for example. */}
      <div className="flex gap-5 flex-wrap justify-center items-center mb-10">
        {newsLetter.map((img, index) => (
          <div className="relative" key={index} onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}>
            <a href="https://instagram.com/" target="_blank">
              <img src={img.img} alt="instagram post" className="w-[150px]" />
              {isHovering === index && (
                <div className="appear-half flex justify-center items-center absolute bg-black opacity-[50%] w-full h-full inset-0">
                  <img src={instagram} alt="instagram" />
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10 pt-5">
        <h2 className="text-[35px] tracking-widest font-roboto font-medium 
        text-center">
          Or subscribe to the newsletter
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <form action="">
          <div className="flex gap-5">
            <input type="text" name="email" className="w-[400px] sm:w-full capitalize
             placeholder:font-sans placeholder:font-semibold placeholder:text-[#717171]
             bg-transparent outline-none border-b-black border-b-2 px-3" placeholder="Email address..." />
            <button className="font-sans font-semibold border-b-2 border-b-black px-3">SUBMIT</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
