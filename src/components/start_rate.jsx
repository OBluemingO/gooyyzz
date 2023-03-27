import React from "react";
import { AiFillStar, AiOutlineStar} from "react-icons/ai";

const StarRate = ({ count }) => {
    return (
        <div className="flex gap-1">
            {Array(5)
                .fill(null)
                .map((el, index) =>
                    count <= index ? (
                        <span>
                            <AiOutlineStar size={30} />
                        </span>
                    ) : (
                        <span>
                            <AiFillStar  size={30} />
                        </span>
                    )
                )}
        </div>
    );
};

export default StarRate;
