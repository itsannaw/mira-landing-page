import { useMemo } from "react";
import { BUTTON_TYPES } from "../const";

const SIZE_MAPPER = {
  [BUTTON_TYPES.SMALL]: "",
  [BUTTON_TYPES.BIG]: "",
};

const Button = (props) => {
  const sizes = useMemo(() => {
    return SIZE_MAPPER[props.type];
  }, [props.type]);
  return (
    <button
      className={`${sizes} flex py-2.5 px-6 rounded-xl bg-violet hover:bg-dark_violet active:bg-light_orange`}
    >
      <span className="text-white text-sm font-normal active:text-black">
        {props.children}
      </span>
    </button>
  );
};

export default Button;
