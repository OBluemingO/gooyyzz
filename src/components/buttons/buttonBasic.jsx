import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Buttonbasic = () => {
    return (
        <motion.div
            className="flex items-center gap-2 h-full w-full
        justify-center lg:max-w-[248px] lg:max-h-[70px] 
        bg-white text-light-purple
        rounded select-none
        "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
        >
            <p className="font-semibold text-2xl">SHOP NOW</p>
            <BsFillArrowRightCircleFill size={20} />
        </motion.div>
    );
};

export default Buttonbasic;
