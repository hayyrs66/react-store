import { zaralogo } from "../assets";
import style from "../style";

const BrandBanner = () => {
  return (
    <section className={`${style.Xpadding} h-full py-[10rem] bg-brandbanner bg-cover bg-center flex justify-end`}>
      <div className="flex justify-end items-center">
        <div className="flex flex-col">
          <img src={zaralogo} alt="Zara" className="w-[191px] h-[81px] mb-8" />
          <p className="capitalize text-white font-roboto font-normal w-[504px] mb-8">Lustrous yet understated. The new evening
            wear collection exclusively offered at the
            reopened Giorgio Armani boutique in Los
            Angeles.</p>
            <div className="w-[145px] h-[45px] bg-white flex items-center
            justify-center">
              <span className="capitalize font-roboto font-normal">see collection</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default BrandBanner
