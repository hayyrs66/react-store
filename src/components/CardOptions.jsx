import { heart, searchwhite, bag } from '../assets';

const CardOptions = () => {
    return (
        <div className="flex justify-between items-center absolute bottom-0 w-full h-[45px]
                      bg-[#1E2832] px-4 appear">
            <div className="flex gap-5 items-center">
                <img src={heart} alt="heart" className="w-[24px] h-[24px]" />
                <img src={searchwhite} alt="heart" className="w-[24px] h-[24px]" />
            </div>
            <div className="flex items-center gap-2  cursor-pointer">
                <img src={bag} alt="shop" className="w-[24px] h-[24px]" />
                <span className="capitalize font-roboto font-normal text-white">Shop now</span>
            </div>
        </div>
    )
}

export default CardOptions
