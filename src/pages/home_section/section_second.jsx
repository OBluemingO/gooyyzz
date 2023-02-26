import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ImageHome from "../../components/frameImage/image_home";

const SectionSecond = () => {
    const textHeadRef = useRef();
    const textBottomRef = useRef();
    const imageProductRef = useRef();
    const groupTextRef = useRef();

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

            gsap.from(imageProductRef.current.childNodes, {
                scale: 0,
                opacity: 0,
                duration: 2,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: imageProductRef.current,
                    start: "30% 100%",
                    end: "40% 60%",
                    scrub: 2,
                    once: true,
                    markers: true,
                },
            });

            const horizontalLoop = (items, config) => {
                config = config || {};
                let tl = gsap.timeline({
                        repeat: config.repeat,
                        paused: config.paused,
                        defaults: { ease: "none" },
                        onReverseComplete: () =>
                            tl.totalTime(tl.rawTime() + tl.duration() * 100),
                    }),
                    length = items.length,
                    startX = items[0].offsetLeft,
                    times = [],
                    widths = [],
                    xPercents = [],
                    curIndex = 0,
                    pixelsPerSecond = (config.speed || 1) * 100,
                    snap =
                        config.snap === false
                            ? (v) => v
                            : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
                    populateWidths = () =>
                        items.forEach((el, i) => {
                            widths[i] = parseFloat(
                                gsap.getProperty(el, "width", "px")
                            );
                            xPercents[i] = snap(
                                (parseFloat(gsap.getProperty(el, "x", "px")) /
                                    widths[i]) *
                                    100 +
                                    gsap.getProperty(el, "xPercent")
                            );
                        }),
                    getTotalWidth = () =>
                        items[length - 1].offsetLeft +
                        (xPercents[length - 1] / 100) * widths[length - 1] -
                        startX +
                        items[length - 1].offsetWidth *
                            gsap.getProperty(items[length - 1], "scaleX") +
                        (parseFloat(config.paddingRight) || 0),
                    totalWidth,
                    curX,
                    distanceToStart,
                    distanceToLoop,
                    item,
                    i;
                populateWidths();
                gsap.set(items, {
                    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
                    xPercent: (i) => xPercents[i],
                });
                gsap.set(items, { x: 0 });
                totalWidth = getTotalWidth();
                for (i = 0; i < length; i++) {
                    item = items[i];
                    curX = (xPercents[i] / 100) * widths[i];
                    distanceToStart = item.offsetLeft + curX - startX;
                    distanceToLoop =
                        distanceToStart +
                        widths[i] * gsap.getProperty(item, "scaleX");
                    tl.to(
                        item,
                        {
                            xPercent: snap(
                                ((curX - distanceToLoop) / widths[i]) * 100
                            ),
                            duration: distanceToLoop / pixelsPerSecond,
                        },
                        0
                    )
                        .fromTo(
                            item,
                            {
                                xPercent: snap(
                                    ((curX - distanceToLoop + totalWidth) /
                                        widths[i]) *
                                        100
                                ),
                            },
                            {
                                xPercent: xPercents[i],
                                duration:
                                    (curX -
                                        distanceToLoop +
                                        totalWidth -
                                        curX) /
                                    pixelsPerSecond,
                                immediateRender: false,
                            },
                            distanceToLoop / pixelsPerSecond
                        )
                        .add("label" + i, distanceToStart / pixelsPerSecond);
                    times[i] = distanceToStart / pixelsPerSecond;
                }
                function toIndex(index, vars) {
                    vars = vars || {};
                    Math.abs(index - curIndex) > length / 2 &&
                        (index += index > curIndex ? -length : length); // always go in the shortest direction
                    let newIndex = gsap.utils.wrap(0, length, index),
                        time = times[newIndex];
                    if (time > tl.time() !== index > curIndex) {
                        // if we're wrapping the timeline's playhead, make the proper adjustments
                        vars.modifiers = {
                            time: gsap.utils.wrap(0, tl.duration()),
                        };
                        time += tl.duration() * (index > curIndex ? 1 : -1);
                    }
                    curIndex = newIndex;
                    vars.overwrite = true;
                    return tl.tweenTo(time, vars);
                }
                tl.next = (vars) => toIndex(curIndex + 1, vars);
                tl.previous = (vars) => toIndex(curIndex - 1, vars);
                tl.current = () => curIndex;
                tl.toIndex = (index, vars) => toIndex(index, vars);
                tl.updateIndex = () =>
                    (curIndex = Math.round(tl.progress() * (items.length - 1)));
                tl.times = times;
                tl.progress(1, true).progress(0, true); // pre-render for performance
                if (config.reversed) {
                    tl.vars.onReverseComplete();
                    tl.reverse();
                }

                return tl;
            };

            const links = groupTextRef.current.childNodes;
            let loop = horizontalLoop(links, {
                repeat: -1,
                speed: 1.25,
                reversed: false,
                // paddingRight: `50px`
                paddingRight: parseFloat(
                    gsap.getProperty(links[0], "marginRight", "px")
                ),
            });

            groupTextRef.current.addEventListener("mouseenter", () => {
                loop.pause();
            });

            groupTextRef.current.addEventListener("mouseleave", () => {
                loop.play();
            });

            let currentScroll = 0;
            let scrollDirection = 1;

            window.addEventListener("scroll", () => {
                let direction = window.pageYOffset > currentScroll ? 1 : -1;
                if (direction !== scrollDirection) {
                    gsap.to(loop, { timeScale: direction, overwrite: true });
                    scrollDirection = direction;
                }
                currentScroll = window.pageYOffset;
            });
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
            <div className="relative justify-center lg:mt-[50px] flex items-center overflow-x-hidden">
                <div
                    className="relative whitespace-nowrap text-white p-0 m-0 will-change-transform select-none bg-gray-600 overflow-hidden"
                    ref={groupTextRef}
                >
                    <span className="inline-block text-5xl w-[15%]">
                        75% off
                    </span>
                    <span className="inline-block w-[15%] text-5xl">
                        start-date
                    </span>
                    <span className="inline-block w-[15%]  text-5xl">
                        2-28-2023
                    </span>
                    <span className="inline-block w-[15%] text-5xl">
                        end-date
                    </span>
                    <span className="inline-block w-[15%]  text-5xl">
                        3-15-2023
                    </span>
                    <span className="inline-block w-[15%]  text-5xl">
                        75% off
                    </span>
                    <span className="inline-block w-[15%]  text-5xl">
                        start-date
                    </span>
                    <span className="inline-block w-[15%]  text-5xl">
                        2-28-2023
                    </span>
                    <span className="inline-block w-[15%]  text-5xl">
                        end-date
                    </span>
                    <span className="inline-block w-[15%]  text-5xl">
                        3-15-2023
                    </span>
                </div>
            </div>
            <div
                className="w-full h-[70%] relative mt-20 overflow-hidden"
                ref={imageProductRef}
            >
                {product.map((el, index) => (
                    <ImageHome {...el} index={index} key={index + el.name} />
                ))}
            </div>
        </div>
    );
};

export default SectionSecond;
