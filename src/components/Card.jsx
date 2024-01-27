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
    <div className="flex flex-col gap-5 bg-[#F6F5F8] rounded-[20px] max-w-[427px] w-full py-8 px-9 shadow-card">
      <div className="flex gap-3">
        <button className="flex justify-center items-center max-w-[287px] w-full text-white bg-violet rounded-3xl py-[10px] px-3 border-2 border-[#CFD0DA] cursor-default">
          <span className="lg:text-base xl:text-lg leading-[22px] tracking-[0.7px]">
            {cards.button_text}
          </span>
        </button>
        <div className="flex justify-center items-center w-[56px] h-[56px] bg-light_orange rounded-full">
          <img className="w-9 h-9" src={cards.src} alt={cards.alt} />
        </div>
      </div>
      <div className="flex flex-col  justify-between gap-5 h-[195px]">
        <img src="/images/works/border_dark.png" alt="" />
        <span className="h-[150px] text-base leading-[22px] tracking-[0.1px]">
          {props.children}
        </span>
        <img src="/images/works/border_dark.png" alt="" />
      </div>
      <span className="flex justify-center lg:text-[180px] xl:text-[200px] text-violet font-medium leading-[170px] opacity-50">
        {cards.number}
      </span>
    </div>
  );
};

export default Card;
