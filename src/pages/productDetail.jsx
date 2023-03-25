import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { categorie,productId } = useParams();
    return <div className="lg:pt-[130px]">{ categorie + productId}</div>;
};

export default ProductDetail;
