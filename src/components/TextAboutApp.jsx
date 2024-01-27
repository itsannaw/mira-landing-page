import { useMemo } from "react";
import { TEXT_ABOUT_TYPES } from "../const";

const IMAGES_MAPPER = {
  [TEXT_ABOUT_TYPES.SMILE]: (
    <img
      className="w-[100px] h-[100px]"
      src="/images/about/Smile.png"
      alt="#"
    />
  ),
  [TEXT_ABOUT_TYPES.LIKE]: (
    <img className="w-[100px] h-[100px]" src="/images/about/Like.png" alt="#" />
  ),
  [TEXT_ABOUT_TYPES.DIALOGUE]: (
    <img
      className="w-[100px] h-[100px]"
      src="/images/about/Dialogue.png"
      alt="#"
    />
  ),
  [TEXT_ABOUT_TYPES.CHECK]: (
    <img
      className="w-[100px] h-[100px]"
      src="/images/about/Check.png"
      alt="#"
    />
  ),
};

const TextAboutApp = (props) => {
  const image = useMemo(() => {
    return IMAGES_MAPPER[props.type];
  }, [props.type]);
  return (
    <div
      className={`text-center lg:text-left flex flex-col ${props.className}`}
    >
      <div className="flex justify-center lg:justify-start">{image}</div>
      <span className="text-black text-lg leading-[22px] tracking-[0.7px]">
        {props.children}
      </span>
    </div>
  );
};

export default TextAboutApp;
