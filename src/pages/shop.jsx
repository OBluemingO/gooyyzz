import { motion as m } from "framer-motion";
import SectionBanner from "./shop_section/section_banner";
import SectionProductList from "./shop_section/section_productList";

const Shop = () => {
    return <m.div className="h-auto w-full">
      <SectionBanner />
      <SectionProductList />
    </m.div>;
};

export default Shop;
