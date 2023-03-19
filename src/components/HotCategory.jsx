import style from "../style";
import {
  trendmodel,
  trendmodel2,
  trendmodel3,
  trendmodel4,
  trendmodel5,
  exploretext
} from '../assets';

const HotCategory = () => {
  return (
    <section className={`${style.Xpadding} h-full bg-white pb-[8rem]`}>
      <div className="grid grid-cols-2 gap-5 gg:grid-cols-1">
        <div>
          <img src={trendmodel} alt="model" className="w-full h-full object-cover" />
        </div>
        <div className="grid reverse grid-content-center grid-cols-2 gap-5">
          <img src={trendmodel2} alt="model" className="w-full h-full" />
          <img src={trendmodel3} alt="model" className="w-full h-full" />
          <img src={trendmodel4} alt="model" className="w-full h-full" />
          <div className="relative">
            <img src={trendmodel5} alt="model" className="w-full h-full relative" />
            <div className="absolute w-full h-[45px] bg-[#1E2832] bottom-0 flex
            justify-between items-center px-3">
              <h4 className="font-sans font-semibold text-white">Jacket</h4>
              <span className="font-sans font-semibold text-white
              whitespace-nowrap">103 Product</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default HotCategory
