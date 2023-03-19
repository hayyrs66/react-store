import { useState } from 'react';
import CardOptions from './CardOptions';
import { productsList } from '../constants';
import NormalPrice from './NormalPrice';
import SalePrice from './SalePrice';
import SaleTag from './SaleTag';
import HotTag from './HotTag';

const Card = () => {

    const [isHovering, setIsHovering] = useState(-1);
    const handleMouseOver = (item) => {
        setIsHovering(item);
    };

    const handleMouseOut = () => {
        setIsHovering(-1);
    };


    return (
        <>
            {productsList.map((product, index) => (
                <div key={index}>
                    <div className="relative mb-4" onMouseOver={() => {handleMouseOver(index);}} onMouseOut={handleMouseOut}>
                        <img src={product.img} alt="product" className="w-full h-full jshover cursor-pointer" />
                        {product.sale && <SaleTag />}
                        {product.trend && <HotTag />}

                        {isHovering === index && <CardOptions />}
                    </div>
                    <div className="flex justify-center flex-col px-3">
                        <h3 className="captialize font-sans font-bold text-black mb-3">{product.title}</h3>
                        {product.sale && <SalePrice category={product.category} price={product.price} salePrice={product.salePrice}/>}
                        {!product.sale && <NormalPrice category={product.category} price={product.price} />}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card
