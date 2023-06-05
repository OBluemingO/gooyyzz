import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ImageHome from "../../components/frameImage/image_home";
import ParallaxText from "../../components/texts/parallaxText";
import { AiOutlineArrowRight } from "react-icons/ai";
import clsx from "clsx";
import Buttonbasic from "../../components/buttons/buttonBasic";

const SectionSecond = () => {
    const product = [
        {
            price: "289.00",
            name: "Rhode Personal",
            detail: "Cupiditate beatae corporis consequatur sed. Illum in esse nihil quisquam quas. Doloribus rerum fugit soluta id maxime. Aperiam ipsam aut nemo reiciendis iste. Hic harum reiciendis et et necessitatibus voluptatem inventore at.",
            choice_product: [
                {
                    url: "http://placeimg.com/640/480",
                    name: "veniam",
                    detail: "Deserunt consequuntur exercitationem rerum amet quo. Quam ipsa dolorem. Tempora aut voluptatem et. Quibusdam sapiente quaerat esse et non earum ratione quis.",
                },
                {
                    url: "http://placeimg.com/640/480",
                    name: "veniam",
                    detail: "Deserunt consequuntur exercitationem rerum amet quo. Quam ipsa dolorem. Tempora aut voluptatem et. Quibusdam sapiente quaerat esse et non earum ratione quis.",
                },
                {
                    url: "http://placeimg.com/640/480",
                    name: "veniam",
                    detail: "Deserunt consequuntur exercitationem rerum amet quo. Quam ipsa dolorem. Tempora aut voluptatem et. Quibusdam sapiente quaerat esse et non earum ratione quis.",
                },
                {
                    url: "http://placeimg.com/640/480",
                    name: "veniam",
                    detail: "Deserunt consequuntur exercitationem rerum amet quo. Quam ipsa dolorem. Tempora aut voluptatem et. Quibusdam sapiente quaerat esse et non earum ratione quis.",
                },
                {
                    url: "http://placeimg.com/640/480",
                    name: "veniam",
                    detail: "Deserunt consequuntur exercitationem rerum amet quo. Quam ipsa dolorem. Tempora aut voluptatem et. Quibusdam sapiente quaerat esse et non earum ratione quis.",
                },
            ],
            review: {
                rate: 4,
                comment: [
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                ],
            },
        },
        {
            url: "http://placeimg.com/640/480",
            price: "289.00",
            name: "Rhode Personal",
            detail: "Cupiditate beatae corporis consequatur sed. Illum in esse nihil quisquam quas. Doloribus rerum fugit soluta id maxime. Aperiam ipsam aut nemo reiciendis iste. Hic harum reiciendis et et necessitatibus voluptatem inventore at.",
            review: {
                rate: 4,
                comment: [
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                ],
            },
        },
        {
            url: "http://placeimg.com/640/480",
            price: "289.00",
            name: "Rhode Personal",
            detail: "Cupiditate beatae corporis consequatur sed. Illum in esse nihil quisquam quas. Doloribus rerum fugit soluta id maxime. Aperiam ipsam aut nemo reiciendis iste. Hic harum reiciendis et et necessitatibus voluptatem inventore at.",
            review: {
                rate: 4,
                comment: [
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                    {
                        name: "Teagan",
                        profile_url:
                            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
                    },
                ],
            },
        },
    ];
    const textHeadRef = useRef();
    const textBottomRef = useRef();
    const [currentProduct, setCurrentProduct] = useState(0);
    const [currentProductChoice, setCUrrentProductChoice] = useState(0);
    const [productData, setProductData] = useState(product);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textHeadRef.current, {
                x: -400,
                scrollTrigger: {
                    trigger: textHeadRef.current,
                    start: "top bottom",
                    end: "bottom 50%",
                    scrub: 1,
                    once: true,
                },
            });

            gsap.from(textBottomRef.current, {
                x: 300,
                scrollTrigger: {
                    trigger: textBottomRef.current,
                    start: "top bottom",
                    end: "bottom 50%",
                    scrub: 1,
                    once: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full h-[1400px] pt-[2.5%] flex flex-col">
            <div className="text-center text-white h-auto w-full">
                <p className="text-[100px] m-0 p-0" ref={textHeadRef}>
                    deal bundles
                </p>
                <h4 className="text-6xl tracking-[10px]" ref={textBottomRef}>
                    special price available
                </h4>
            </div>
            <section className="relative w-full">
                <ParallaxText baseVelocity={0.5}>
                    start date - 1 Mar 2023 - end date - 31 Mar 2023 - 50% off -{" "}
                </ParallaxText>
            </section>
            <div className="flex flex-grow ">
                {productData.map((el, index) => {
                    if (index != currentProduct) return null;
                    return (
                        <div className="flex"  key={`section_second_home-${index}`}>
                            <div className="my-auto justify-center flex flex-col gap-4 items-start  w-[400px] h-2/3">
                                <h1 className="text-7xl font-bold text-white ">
                                    {el.name}
                                </h1>
                                <p className="text-2xl text-gray-300">
                                    {el.detail}
                                </p>
                                <Buttonbasic path={"/"}>Order Now</Buttonbasic>
                                <div></div>
                            </div>
                            <div className="grid place-items-center">
                                <img
                                    className="aspect-square"
                                    src={
                                        el.choice_product[currentProductChoice]
                                            .url
                                    }
                                    alt={el.name}
                                />
                            </div>
                            <div className="my-auto flex flex-col gap-6 w-[400px] h-[500px] overflow-y-scroll custom_scroll">
                                {el.choice_product.map(
                                    ({ name, detail }, index_choice) => {
                                        return (
                                            <div
                                                onClick={() =>
                                                    setCUrrentProductChoice(
                                                        index_choice
                                                    )
                                                }
                                                className={clsx(
                                                    "mx-auto w-[90%] h-[auto] py-2 px-4 rounded-2xl cursor-pointer",
                                                    {
                                                        "bg-white ":
                                                            currentProductChoice ==
                                                            index_choice,
                                                    }
                                                )}
                                                key={`index_product_choice_home_${index_choice}`}
                                            >
                                                <h1
                                                    className={clsx(
                                                        "text-4xl  font-bold",
                                                        {
                                                            "text-black":
                                                                currentProductChoice ==
                                                                index_choice,
                                                            "text-white":
                                                                currentProductChoice !=
                                                                index_choice,
                                                        }
                                                    )}
                                                >
                                                    {name}
                                                </h1>
                                                <p
                                                    className={clsx({
                                                        "text-black":
                                                            currentProductChoice ==
                                                            index_choice,
                                                        "text-white":
                                                            currentProductChoice !=
                                                            index_choice,
                                                    })}
                                                >
                                                    {detail}
                                                </p>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SectionSecond;
