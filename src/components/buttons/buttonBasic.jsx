import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Buttonbasic = () => {
    const navigate = useNavigate();
    const handleNavigateClick = () => {
        navigate("/shop");
    };
    return (
        <motion.div
            className="flex items-center gap-2 h-full w-full
        justify-center md:max-w-[248px] md:max-h-[70px] 
        bg-white text-light-purple
        rounded select-none cursor-pointer
        "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            onClick={handleNavigateClick}
        >
            <p className="font-semibold text-2xl">SHOP NOW</p>
            <BsFillArrowRightCircleFill size={20} />
        </motion.div>
    );
};

export default Buttonbasic;
