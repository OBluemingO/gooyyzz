import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const SectionThrid = () => {
    const contentRef = useRef(null);
    const textHeadRef = useRef(null);
    useLayoutEffect(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 50%",
                    end: "50% 75%",
                    markers: true,
                },
            });

            // const text_split = [...textHeadRef.current.childNodes].filter(
            //     (el) => el.localName != "br" && el.nodeName != "#text"
            // );
                
            tl.to(gsap.utils.toArray(textHeadRef.current.childNodes), {
                y: 80,
                duration: 1.5,
                ease: "back",
                stagger: 0.2,
            });

            return () =>  tl.scrollTrigger.kill()
    }, []);

    return (
        <div className="w-full lg:h-[1200px] border-2" ref={contentRef}>
            <h2
                className="text-8xl lg:w-[80%] lg:mx-auto text-white tracking-[7.5px]"
                ref={textHeadRef}
            >
                <span className="font-bold overflow-hidden">Lorem ipsum</span> dolor!
                <br />
                <span className="font-bold overflow-hidden"> ipsum </span>dolor!
            </h2>
            <div className=" lg:mt-[60px] lg:w-[80%] lg:mx-auto border-b-[1px] bg-white"></div>
            <div className="flex text-white lg:w-[80%] lg:mx-auto lg:pt-[50px]">
                <div className="basis-[40%]">
                    <p className="w-[80%] text-2xl">Lorem ipsum dolor</p>
                </div>
                <div className="flex-grow ">
                    <p className="w-[60%] text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque iure expedita cum eveniet, aliquam
                        beatae tempore nisi, dolore incidunt similique, fugit
                        aut quae autem. Sunt debitis molestiae quisquam
                        similique eligendi.
                    </p>
                </div>
            </div>
            <div className="flex text-white lg:w-[80%] lg:mx-auto lg:pt-[50px]">
                <div className="basis-[40%]">
                    <p className="w-[80%] text-2xl">Lorem ipsum dolor</p>
                </div>
                <div className="flex-grow ">
                    <p className="w-[60%] text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque iure expedita cum eveniet, aliquam
                        beatae tempore nisi, dolore incidunt similique, fugit
                        aut quae autem. Sunt debitis molestiae quisquam
                        similique eligendi.
                    </p>
                </div>
            </div>
            <div className="flex text-white lg:w-[80%] lg:mx-auto lg:pt-[50px]">
                <div className="basis-[40%]">
                    <p className="w-[80%] text-2xl">Lorem ipsum dolor</p>
                </div>
                <div className="flex-grow ">
                    <p className="w-[60%] text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque iure expedita cum eveniet, aliquam
                        beatae tempore nisi, dolore incidunt similique, fugit
                        aut quae autem. Sunt debitis molestiae quisquam
                        similique eligendi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionThrid;
