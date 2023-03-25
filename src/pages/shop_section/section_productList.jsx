import React, { useContext, useEffect, useState } from "react";
import { getProductList } from "../../api/shop";
import ButtonProductlist from "../../components/buttons/buttonProductlist";
import ProductListCard from "../../components/cards/productListCard";
import Pagination from "../../components/Pagination/Pagination";
import { Context } from "../../store";

const SectionProductList = () => {
    const [categorie, setCategorie] = useState([
        {
            name: "All",
            total: 24,
        },
        {
            name: "Pizza",
            total: 9,
        },
        {
            name: "Burgger",
            total: 8,
        },
        {
            name: "Chicken",
            total: 7,
        },
    ]);
    const [selectCategorie, setSelectCategorie] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const { isLoading, handleLoading } = useContext(Context);

    const fetchCategorie = async () => {
        const { data } = await getProductList();
        setCategorie(data);
        handleLoading(false);
    };

    useEffect(() => {
        // assume is fetch data
        // fetchCategorie()
    }, []);

    const callBackButtonActive = (value) => {
        setSelectCategorie(value);
    };

    return (
        <>
            <div className="lg:pt-[92px] lg:pb-[60px] flex flex-col justify-center items-center lg:gap-12 ">
                <h1 className="lg:text-4xl lg:font-medium p-0 m-0">
                    Popular Product Items
                </h1>
                <div
                    className="flex lg:gap-8 lg:max-w-[1100px] lg:max-h-[57px]
            w-full h-full mx-auto
            "
                >
                    {categorie.map((el, index) => (
                        <ButtonProductlist
                            {...el}
                            index={index}
                            active={selectCategorie == index}
                            callBackButtonActive={callBackButtonActive}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full h-full lg:max-w-[1100px] lg:h-[980px] lg:mx-auto grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 ">
                {Array(6)
                    .fill(null)
                    .map((el, index) => (
                        <ProductListCard key={`product-list-card-${index}`} />
                    ))}
            </div>
            <div className="w-full h-full lg:max-w-[1100px] mx-auto lg:mt-[60px]">
                <Pagination
                    currentPage={currentPage}
                    // totalCount={data.length}
                    // pageSize={PageSize}
                    totalCount={20}
                    pageSize={2}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </>
    );
};

export default SectionProductList;
