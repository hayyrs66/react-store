import { brand1, brand2, brand3, brand4, brand5 } from '../assets';
import style from '../style';

const Brand = () => {
  return (
    <section className={`${style.Xpadding} h-full flex justify-center items-center`}>
      <div className='flex justify-center items-center flex-wrap gap-14 py-16'>
        <img src={brand1} alt="brand" className='w-[170px] h-[60px] object-cover'/>
        <img src={brand2} alt="brand" className='w-[170px] h-[60px] object-cover'/>
        <img src={brand3} alt="brand" className='w-[170px] h-[60px] object-cover'/>
        <img src={brand4} alt="brand" className='w-[170px] h-[60px] object-cover'/>
        <img src={brand5} alt="brand" className='w-[170px] h-[60px] object-cover'/>
      </div>
    </section>
  )
}

export default Brand
