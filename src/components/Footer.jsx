import style from "../style";
import { logo, facebook, twitter, linkedin, dribbble, iconspay, up } from "../assets";
import FooterBox from "./FooterBox";

const Footer = () => {
  return (
    <footer className={`h-full pt-[7rem]`}>
      <div className={`${style.Xpadding} pb-[5rem] grid grid-cols-4 gap-14 
      gg:grid-cols-3 ssm:grid-cols-2 ss:grid-cols-1`}>
        <div className="flex flex-col">
          <img src={logo} alt="coral" className="w-fit h-fit mb-5" />
          <p className="text-[15px] font-sans font-normal text-[#292929] capitalize
          leading-7 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="flex items-center gap-8">
            <a href="">
              <img src={facebook} alt="facebook" className="w-full h-full" />
            </a>
            <a href="">
              <img src={twitter} alt="twitter" className="w-full h-full" />
            </a>
            <a href="">
              <img src={linkedin} alt="linkedin" className="w-full h-full" />
            </a>
            <a href="">
              <img src={dribbble} alt="dribbble" className="w-full h-full" />
            </a>
          </div>
        </div>
        <FooterBox
          title="CATALOG"
          link1="Necklaces"
          link2="hoodies"
          link3="Jewelry Box"
          link4="t-shirt"
          link5="jacket" />

        <FooterBox
          title="ABOUT US"
          link1="Our Producers"
          link2="Sitemap"
          link3="FAQ"
          link4="About Us"
          link5="Terms & Conditions" />

        <FooterBox
          title="CUSTOMER SERVICES"
          link1="Contact Us"
          link2="Track Your Order"
          link3="Product Care & Repair"
          link4="Book an Appointment"
          link5="Shipping & Returns" />
      </div>
      <div className="flex justify-between items-center px-[10rem] smg:px-[5rem] h-[45px] w-full bg-[#1E2832]">
        <small className="font-sans font-semibold text-white">© 2022 Coral , Inc.</small>
        <img src={iconspay} alt="payment" className=" object-contain" />
        <a href="">
          <div className="flex justify-center items-center">
            <span className="text-white font-sans font-semibold">Scroll to top</span>
            <img src={up} alt="arrow" className="w-[16px] h-[16px]" />
          </div>
        </a>
      </div>
    </footer>
  )
}

export default Footer
