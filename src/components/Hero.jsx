import { modelhero, bag } from '../assets';
import style from '../style';

const Hero = () => {
  return (
    <section className={`${style.Xpadding} bg-[#F1F1F1] h-full`}>
      <div className="flex gg:flex-wrap items-center gg:justify-center justify-between py-[13rem] gap-8">
        <div className='flex justify-center gg:items-center flex-col'>
          <h2 className='text-[74px] font-roboto font-light leading-[55px] mb-8'>Collections</h2>
          <p className='font-roboto font-normal gg:text-center text-[20px] leading-[40px] max-w-[550px] mb-20'>
            You Can Explore And Shop Many Different Collection
            From Various Brands Here.</p>
          <a href="" className='w-fit'>
            <div className='flex gap-2 justify-center items-center bg-[#1E2832] w-[200px] h-[50px]
            hover:bg-[#2c3a4b] trans-faster '>
              <img src={bag} alt="Shop bag" className='w-[25px]' />
              <span className='font-roboto font-normal text-white text-[20px]'>Shop Now</span>
            </div>
          </a>
        </div>
        <div>
          <img src={modelhero} alt="model" className='w-[340px]' />
        </div>
      </div>
    </section>
  )
}

export default Hero
