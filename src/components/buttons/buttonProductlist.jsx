import clsx from "clsx";

const ButtonProductlist = ({ name, total, active, index, callBackButtonActive }, ref) => {
    const handleClick = () => {
      callBackButtonActive(index)
    }
    return (
        <div
            className={clsx(
                { "text-light-purple": active, "text-black": !active },
                "lg:h-full lg:w-1/4 p-4 text-center bg-white  font-semibold rounded cursor-pointer"
            )}
            onClick={handleClick}
        >
            {name} ({total})
        </div>
    );
};

export default ButtonProductlist;
