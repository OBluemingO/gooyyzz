import { motion as m } from "framer-motion";
import { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SectionBanner from "./shop_section/section_banner";
import SectionFeature from "./shop_section/section_feature";
import SectionOrder from "./shop_section/section_order";
import SectionProductList from "./shop_section/section_productList";

const Shop = () => {
    const [searchParams] = useSearchParams();
    const search_product = Object.fromEntries([...searchParams]);

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return (
        <m.div className="h-auto w-full">
            <SectionBanner />
            <SectionProductList search={search_product} />
            <SectionOrder />
            <SectionFeature />
        </m.div>
    );
};

export default Shop;
