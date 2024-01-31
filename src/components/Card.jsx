import { useMemo } from "react";
import { HOW_IT_WORKS_CARDS } from "../const";

const CARDS_MAPPER = {
  [HOW_IT_WORKS_CARDS.PLUS]: {
    src: "/images/works/Plus.svg",
    alt: "plus",
    button_text: "Записи (чек-ины)",
    number: "01",
  },
  [HOW_IT_WORKS_CARDS.CHART]: {
    src: "/images/works/Chart.svg",
    alt: "chart",
    button_text: "Статистика",
    number: "02",
  },
  [HOW_IT_WORKS_CARDS.PRAXIS]: {
    src: "/images/works/Praxis.svg",
    alt: "praxis",
    button_text: "Упражнения",
    number: "03",
  },
};

const Card = (props) => {
  const cards = useMemo(() => {
    return CARDS_MAPPER[props.type];
  }, [props.type]);

  return (
    <div className="flex flex-col gap-[13px] lg:gap-5 bg-[#F6F5F8] rounded-[20px] max-w-[380px] lg:max-w-[427px] w-full py-5 px-[19px] md:py-8 md:px-9 shadow-card">
      <div className="flex gap-3 justify-center max-md:items-center">
        <button className="flex justify-center items-center max-w-[230px] md:max-w-[287px] w-full text-white bg-violet rounded-3xl py-[10px] px-3 border-2 border-[#CFD0DA] cursor-default">
          <span className="text-sm font-medium lg:font-normal lg:text-base xl:text-lg leading-[22px] tracking-[0.7px]">
            {cards.button_text}
          </span>
        </button>
        <div className="flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 bg-light_orange rounded-full">
          <img
            className="w-7 h-7 lg:w-9 lg:h-9"
            src={cards.src}
            alt={cards.alt}
          />
        </div>
      </div>
      <div className="flex flex-col  justify-between gap-2 xl:gap-5 md:h-[150px] xl:h-[195px]">
        <img src="/images/works/border_dark.png" alt="" />
        <span className="xl:h-[150px] text-sm leading-[18px] font-medium xl:font-normal xl:text-base xl:leading-[22px] tracking-[0.1px]">
          {props.children}
        </span>
        <img src="/images/works/border_dark.png" alt="" />
      </div>
      <span className="flex justify-center text-[180px] xl:text-[200px] text-violet font-medium leading-[170px] opacity-50">
        {cards.number}
      </span>
    </div>
  );
};

export default Card;
