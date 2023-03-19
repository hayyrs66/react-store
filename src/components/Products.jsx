import style from "../style";
import Card from "./Card";
import { filter, shirt } from "../assets";

const Products = () => {
  return (
    <section className={`${style.Xpadding} h-full pb-[6rem] bg-white`}>
      {/* Titles and categories */}
      <div className="flex justify-center items-center mb-10">
        <h2 className="text-[35px] tracking-widest font-roboto font-medium">New Products</h2>
      </div>
      <div className="flex justify-between gap-5 items-center mb-6">
        <div className="flex gap-8 smm:hidden">
          <a href="">
            <h4 className="capitalize font-semibold font-sans">all products</h4>
          </a>
          <a href="">
            <h4 className="capitalize font-sans font-semibold text-[#777777]">t-shirt</h4>
          </a>
          <a href="">
            <h4 className="capitalize font-sans font-semibold text-[#777777]">hoodies</h4>
          </a>
          <a href="">
            <h4 className="capitalize font-sans font-semibold text-[#777777]">jacket</h4>
          </a>
        </div>
        <div className="flex gap-3">
          <div className="hidden smm:flex justify-center items-center gap-2 bg-[#1E2832] px-4 py-1
        cursor-pointer">
            <img src={shirt} alt="filter" className="w-[16px] h-[16px]" />
            <h5 className="font-normal font-sans text-white">Products</h5>
          </div>
          <div className="flex justify-center items-center gap-2 bg-[#1E2832] px-4 py-1
        cursor-pointer">
            <img src={filter} alt="filter" className="w-[16px] h-[16px]" />
            <h5 className="font-normal font-sans text-white">Filter</h5>
          </div>
        </div>
      </div>

      {/* New products section grid */}
      <div className="grid grid-cols-4 gap-8 bg:grid-cols-3 sg:grid-cols-2
      ">
        <Card />
      </div>
      {/* END New products section grid */}
    </section>
  )
}

export default Products
