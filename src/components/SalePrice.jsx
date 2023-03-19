
const SalePrice = (props) => {
    return (
        <div className="flex justify-between ">
            <span className="capitalize font-normal font-sans text-[#777777]">{props.category}</span>
            <div className="flex gap-2">
                <span className="font-sans font-semibold text-[#777777] line-through">{props.price}</span>
                <span className="font-sans font-bold text-[#FF6F61]">{props.salePrice}</span>
            </div>
        </div>
    )
}

export default SalePrice
