/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
    return (
        <div className="border justify-center items-center rounded-md w-[80vw] shadow-md my-4 p-2 bg-slate-200">
            <div className="flex justify-center  w-full items-center ">
                <div className=" ">
                    <img src={product.Image} alt={product.name} className="w-3/4 h-auto object-cover" />
                </div>
                <div className="w-full">
                    <h2 className="text-lg font-bold mb-2">{product.name}</h2>
                    <p className="text-gray-600 justify-center item-center mb-4">{product.description}</p>
                    <p className="text-blue-500 justify-center items-center">Price: ${product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;