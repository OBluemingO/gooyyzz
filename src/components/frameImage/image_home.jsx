import React, { useEffect, useMemo, useRef } from "react";

const ImageHome = ({ url, price, name, size: { w, h }, index }) => {
    const imageRef = useRef(null);
    useEffect(() => {
        if (imageRef) {
            imageRef.current.style.height = `${w}px`;
            imageRef.current.style.width = `${h}px`;
        }
    }, []);

    return (
        <div className="">
            {index == 0 ? (
                <div
                    ref={imageRef}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/4 border-4"
                >
                    <img
                        className="object-cover h-full w-full"
                        src={url}
                        alt={name + price}
                    />
                </div>
            ) : index == 1 ? (
                <div ref={imageRef} className="absolute left-1/2 top-1/2 translate-x-[100%] translate-y-1/4 border-4">
                    <img
                        className="object-cover h-full w-full"
                        src={url}
                        alt={name + price}
                    />
                </div>
            ) : index == 2 ? (
                <div ref={imageRef} className="absolute left-1/2 top-1/2 translate-x-[150%] translate-y-[175%] border-4">
                    <img
                        className="object-cover h-full w-full"
                        src={url}
                        alt={name + price}
                    />
                </div>
            ) : index == 3 ? (
                <div ref={imageRef} className="absolute left-1/2 top-1/2 -translate-x-[200%] translate-y-[100%] border-4">
                    <img
                        className="object-cover h-full w-full"
                        src={url}
                        alt={name + price}
                    />
                </div>
            ) : (
                index == 4 && (
                    <div ref={imageRef} className="absolute left-[10%] top-1/2 translate-x-[0%] translate-y-[0%] border-4">
                        <img
                            className="object-cover h-full w-full"
                            src={url}
                            alt={name + price}
                        />
                    </div>
                )
            )}
        </div>
    );
};

export default ImageHome;
