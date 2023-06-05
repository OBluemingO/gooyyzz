import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const ProductListCard = ({
    item_name_string,
    item_code_string,
    product_desc_string,
    price_num,
    special_price_num,
    is_deal_bool,
    stock_product_num,
    categorie_string,
    order_num,
    total=24
}) => {
    const navigate = useNavigate();
    const location = useLocation()
    const handleNavigate = () => {
        if (location.pathname.split("/").length > 1)
          window.scrollTo({ behavior: "smooth", left: 0, top: 0 });

        navigate({ pathname: `/shop/${categorie_string}/${item_name_string}_${order_num}`,search:`total=${total}` });
    };

    return (
        <div
            className="w-full h-full bg-white rounded-[10px] overflow-hidden"
            onClick={handleNavigate}
        >
            <div className="relative wrapper-image h-[47%] overflow-hidden">
                <div className="favorite-icon absolute w-[30px] h-[30x] right-[20px] top-[15px]">
                    <MdFavoriteBorder size={30} />
                </div>
                <img
                    className="object-cover w-full h-full object-center"
                    src="https://picsum.photos/1000/1000"
                    alt="mock-image"
                />
            </div>
            <div className="wrapper-detail-image h-[53%] lg:p-7 text-black">
                <div className="flex flex-col">
                    <p className="text-right m-0 p-0">$80.00</p>
                    <h2 className="text-2xl m-0 p-0">{item_name_string}_{order_num}</h2>
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
                    <button className="border-none uppercase text-light-purple py-2 px-7 rounded text-center bg-slate-200 font-semibold">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductListCard;
