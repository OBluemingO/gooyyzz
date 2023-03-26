import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";

const ProductDetail = () => {
    const { categorie, productId } = useParams();

    const path_breadcrumb = [
        { name: "shop" },
        { name: categorie, query: 'categorie' },
        { name: productId, query: 'product' },
    ];
    return (
        <div className="lg:pt-[130px] relative">
            <Breadcrumb path={path_breadcrumb} />
        </div>
    );
};

export default ProductDetail;
