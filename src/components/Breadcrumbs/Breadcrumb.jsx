import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ path }) => {
    const path_memo = useMemo(() => {
        return path;
    }, [path]);
    return (
        <span className="text-white flex gap-1 absolute lg:top-[160px]">
            {path_memo.map((el, index) => {
                if (el.name == path_memo.at(-1).name) {
                    return (
                        <span
                            key={`breadcrumb-${path_memo.at(-1).name}-${index}`}
                        >
                            {el.name}
                        </span>
                    );
                } else {
                    const el_index = (path_memo.findIndex(alias => alias.name == el.name)) + 1
                    const path_query =  '/' + path_memo.slice(0,el_index).reduce((acc, curr, index, ele) => {
                      if(curr.name != ele.at(-1).name) return  acc + curr.name + `/?${ele[index+1].query}=`
                      return acc + curr.name
                    },'')
                    return (
                        <Link key={`breadcrumb-${el.name}-${index}`}
                          to={path_query}
                        >
                            {el.name} /
                        </Link>
                        // <span key={`breadcrumb-${el.name}-${index}`}>
                        //     {el.name} /
                        // </span>
                    );
                }
            })}
        </span>
    );
};

export default Breadcrumb;
