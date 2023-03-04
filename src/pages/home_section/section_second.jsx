import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ImageHome from "../../components/frameImage/image_home";
import ParallaxText from "../../components/texts/parallaxText";

const SectionSecond = () => {
    const textHeadRef = useRef();
    const textBottomRef = useRef();
    // const imageProductRef = useRef();

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

            // gsap.from(imageProductRef.current.childNodes, {
            //     scale: 0,
            //     opacity: 0,
            //     duration: 2,
            //     stagger: 0.5,
            //     scrollTrigger: {
            //         trigger: imageProductRef.current,
            //         start: "30% 100%",
            //         end: "40% 60%",
            //         scrub: 2,
            //         once: true,
            //         markers: true,
            //     },
            // });
        });

        return () => ctx.revert();
    }, []);

    const product = [
        {
            url: "http://placeimg.com/640/480",
            price: "289.00",
            name: "computer",
            size: {
                w: 500,
                h: 500,
            },
            pos: {
                center: true,
                x: 25,
                y: 25,
            },
        },
        {
            url: "http://placeimg.com/640/480",
            price: "289.00",
            name: "computer",
            size: {
                w: 300,
                h: 300,
            },
            pos: {
                x: 20,
                y: 25,
            },
        },
        {
            url: "http://placeimg.com/640/480",
            price: "289.00",
            name: "computer",
            size: {
                w: 250,
                h: 250,
            },
            pos: {
                x: 90,
                y: 80,
            },
        },
        {
            url: "http://placeimg.com/640/480",
            price: "289.00",
            name: "computer",
            size: {
                w: 350,
                h: 350,
            },
            pos: {
                x: 15,
                y: 80,
            },
        },
        {
            url: "http://placeimg.com/640/480",
            price: "289.00",
            name: "computer",
            size: {
                w: 250,
                h: 250,
            },
            pos: {
                x: 80,
                y: 40,
            },
        },
    ];

    return (
        <div className="w-full h-[1400px] pt-[2.5%]">
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
            {/* <div
                className="w-full h-[70%] relative mt-20 overflow-hidden"
                ref={imageProductRef}
            >
                {product.map((el, index) => (
                    <ImageHome {...el} index={index}
                     key={`image-${index}`}
                      />
                ))}
            </div> */}
        </div>
    );
};

export default SectionSecond;
