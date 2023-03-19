
const FooterBox = (props) => {
    return (
        <div className="flex flex-col">
            <h3 className="font-roboto font-medium text-[18px] mb-5">{props.title}</h3>
            <div className="flex flex-col gap-2">
                <a href="">
                    <h5 className="font-sans font-normal text-[#292929] capitalize">{props.link1}</h5>
                </a>
                <a href="">
                    <h5 className="font-sans font-normal text-[#292929] capitalize">{props.link2}</h5>
                </a>
                <a href="">
                    <h5 className="font-sans font-normal text-[#292929] capitalize">{props.link3}</h5>
                </a>
                <a href="">
                    <h5 className="font-sans font-normal text-[#292929] capitalize">{props.link4}</h5>
                </a>
                <a href="">
                    <h5 className="font-sans font-normal text-[#292929] capitalize">{props.link5}</h5>
                </a>
            </div>
        </div>
    )
}

export default FooterBox
