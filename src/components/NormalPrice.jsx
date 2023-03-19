
const NormalPrice = (props) => {
    return (
        <div className="flex justify-between ">
            <span className="capitalize font-normal font-sans text-[#777777]">{props.category}</span>
            <span className="font-sans font-bold">{props.price}</span>
        </div>
    )
}

export default NormalPrice
