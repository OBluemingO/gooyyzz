import { MdFavoriteBorder } from "react-icons/md";

const ProductListCard = () => {
    return (
        <div className="w-full h-full bg-gray-400 rounded">
            <div className="relative wrapper-image h-[47%] overflow-hidden">
                <div className="favorite-icon absolute w-[30px] h-[30x] right-[20px] top-[15px]"><MdFavoriteBorder size={30} /></div>
                <img
                    className="object-cover w-full h-full object-center"
                    src="https://picsum.photos/500/500"
                    alt="mock-image"
                />
            </div>
            <div className="wrapper-detail-image h-[53%] lg:p-7">
                <div className="flex flex-col">
                    <p className="text-right m-0 p-0">$80.00</p>
                    <h2 className="text-2xl m-0 p-0">Beef Burger</h2>
                </div>
                <div>
                    <p className="line-clamp-2 mt-3 lg:mb-[34px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ipsam a, in impedit repellat assumenda tempora
                        iusto Ullam ipsam a, in impedit repellat assumenda
                        tempora iusto Ullam ipsam a, in impedit repellat
                        assumenda tempora iusto Ullam ipsam a, in impedit
                        repellat assumenda tempora iusto
                    </p>
                </div>
                <div className="flex lg:gap-[29px]">
                    <button className="border-none uppercase text-white py-2 px-7 rounded text-center bg-slate-500">
                        order now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductListCard;
