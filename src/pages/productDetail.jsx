import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import ReviewCart from "../components/cards/reviewCart";
import StarRate from "../components/start_rate";
import clsx from "clsx";
import ProductListCard from "../components/cards/productListCard";

const ProductDetail = () => {
    const { categorie, productId } = useParams();
    const [selectSheet, setSelectSheet] = useState(0);

    const path_breadcrumb = [
        { name: "shop" },
        { name: categorie, query: "categorie" },
        { name: productId, query: "product" },
    ];

    const setting = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    };

    useEffect(() => {
        console.log(selectSheet);
    }, [selectSheet]);

    const handleOnclickButton = (value) => {
        setSelectSheet(value);
    };

    return (
        <div className="lg:pt-[130px] relative">
            <Breadcrumb path={path_breadcrumb} />
            <div className="w-full lg:h-[698px] lg:mt-[100px] lg:mx-auto flex lg:max-w-[1100px]">
                <div className="flex lg:flex-col w-full lg:max-w-[255px] h-full justify-between">
                    <div className="w-fulll h-full lg:max-h-[182px] bg-gray-600"></div>
                    <div className="w-fulll h-full lg:max-h-[240px] bg-gray-600"></div>
                    <div className="w-fulll h-full lg:max-h-[240px] bg-gray-600"></div>
                </div>
                <div className="h-full w-full lg:max-w-[457px] bg-gray-600 lg:ml-4 lg:mr-8"></div>
                <section className="text-white">
                    <h1 className="text-4xl font-bold lg:mb-9">
                        Category: {categorie}
                    </h1>
                    <h4 className="text-2xl font-bold lg:mb-3">{productId}</h4>
                    <p className="lg:max-w-[350px] lg:mb-9 text-xl line-clamp-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio quod, architecto delectus ratione obcaecati veniam
                        ipsa. Eaque, quis numquam inventore aut modi .
                    </p>
                    <div className="flex lg:gap-4 items-center">
                        <span className="price text-4xl">$100</span>
                        <span className="discount line-through text-xl text-red-400">
                            $100
                        </span>
                    </div>
                    <div className="flex lg:gap-4 lg:h-[56px] w-full lg:my-9">
                        <span className="px-14 py-4 grid place-items-center bg-red-700">
                            ADD TO CART
                        </span>
                        <span className="grid grid-rows-1 grid-cols-3 lg:w-[120px] lg:h-full">
                            <div className="bg-green-500"></div>
                            <div className="bg-yellow-200"></div>
                            <div className="bg-white"></div>
                        </span>
                    </div>
                    <h4 className="text-2xl font-bold lg:mb-6">
                        Our special servies for you
                    </h4>
                    <ul>
                        <li className=" lg:mb-3">
                            <span className="text-gray-400 pr-4">■</span> free
                            home delivery
                        </li>
                        <li className=" lg:mb-3">
                            <span className="text-gray-400 pr-4">■</span> cash
                            on delivery
                        </li>
                        <li className=" lg:mb-3">
                            <span className="text-gray-400 pr-4">■</span> 100%
                            retrun & refund
                        </li>
                    </ul>
                    <StarRate count={1} />
                    <div className="mt-5">( 120 Reviews )</div>
                </section>
            </div>
            <section className="lg:mx-auto w-full lg:max-w-[1100px] lg:h-[569px] lg:mt-[100px] text-white ">
                <div className="grid grid-cols-3 grid-rows-1 w-full lg:max-w-[825px] lg:h-[60px]">
                    <button
                        className="lg:w-[255px] bg-black capitalize"
                        onClick={(e) => handleOnclickButton(0)}
                    >
                        description
                    </button>
                    <button
                        onClick={(e) => handleOnclickButton(1)}
                        className="lg:w-[255px] bg-black  capitalize"
                    >
                        reviews
                    </button>
                </div>
                <div
                    className={clsx(
                        { hidden: selectSheet != 0 },
                        "w-full h-[500px] transition-all bg-green-700 lg:p-16"
                    )}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit eius quod molestias perferendis sequi sapiente
                    mollitia fugit non. Nam quas consectetur alias expedita
                    perspiciatis, animi est harum itaque eius dicta. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Velit
                    eius quod molestias perferendis sequi sapiente mollitia
                    fugit non. Nam quas consectetur alias expedita perspiciatis,
                    animi est harum itaque eius dicta.
                </div>
                <div
                    className={clsx(
                        { hidden: selectSheet != 1 },
                        "w-full h-[500px] transition-all"
                    )}
                >
                    <Slider className="mt-[60px]" {...setting}>
                        {Array(5)
                            .fill(null)
                            .map((el) => (
                                <ReviewCart />
                            ))}
                    </Slider>
                </div>
            </section>
            <p className="lg:mx-auto w-full lg:max-w-[1100px] text-4xl font-bold">
                Related Items
            </p>
            <section className="lg:mx-auto w-full lg:max-w-[1100px] lg:h-[569px] text-white ">
                <div className="w-full h-[500px]">
                    <Slider className="mt-[60px]" {...setting}>
                        {Array(5)
                            .fill(null)
                            .map((el) => (
                                <div className="h-[468px] w-[345px] p-4">
                                    <ProductListCard />
                                </div>
                            ))}
                    </Slider>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
