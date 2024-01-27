import { useMemo } from "react";
import { BUTTON_TYPES } from "../const";

const SIZE_MAPPER = {
  [BUTTON_TYPES.SMALL]:
    "text-white bg-violet hover:bg-dark_violet active:bg-light_orange active:text-black py-2.5 rounded-xl px-6",
  [BUTTON_TYPES.BIG]:
    "text-base lg:text-lg 2xl:text-2xl font-semibold leading-7 tracking-[0.1px] text-white bg-violet hover:bg-dark_violet active:bg-light_orange active:text-black py-2.5 lg:py-4 rounded-2xl px-6",
  [BUTTON_TYPES.BIG_ORANGE]:
    "text-black bg-light_orange py-4 rounded-2xl px-14 cursor-default",
};

const Button = (props) => {
  const sizes = useMemo(() => {
    return SIZE_MAPPER[props.type];
  }, [props.type]);
  return (
    <button className={`${props.className} ${sizes} flex `}>
      {props.children}
    </button>
  );
};

export default Button;
