import { motion as m } from "framer-motion";
import SectionBanner from "./shop_section/section_banner";
import SectionFeature from "./shop_section/section_feature";
import SectionOrder from "./shop_section/section_order";
import SectionProductList from "./shop_section/section_productList";

const Shop = () => {
    return <m.div className="h-auto w-full">
      <SectionBanner />
      <SectionProductList />
      <SectionOrder />
      <SectionFeature />
    </m.div>;
};

export default Shop;
