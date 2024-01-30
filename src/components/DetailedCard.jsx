import { useMemo } from "react";
import { HOW_IT_WORKS_CARDS } from "../const";

const CARDS_MAPPER = {
  [HOW_IT_WORKS_CARDS.PLUS]: {
    id: "card1",
    bg_color: "bg-dark_violet",
    text_color: "text-white",
    size_phone:
      "xl:w-[457px] xl:h-[523px] md:w-[360px] md:h-[330px] w-[290px] h-[260px] left-[70px] xl:left-[110px] top-[40px]",
    phone: "/images/works/Mockups1.png",
    small_phone: "/images/works/Mockups1m.png",
    alt: "phone_plus",
    border: "border_light.png",
    text1: "Как вести записи",
    text2: () => (
      <span>
        Зафиксировать своё состояние очень просто: <br /> &nbsp; • по кнопке
        открывается экран чек-ина <br /> &nbsp; • Мира задаст 2 вопроса: как ты
        себя чувствуешь
        <br /> &nbsp; и с чем связано это состояние <br /> &nbsp; • в процессе
        чек-ина можно оставить заметку о <br /> &nbsp; своем состоянии, описать
        ситуацию более <br /> &nbsp; подробно.
      </span>
    ),
    text3:
      "Записи хранятся на главной странице приложения, их можно открывать, редактировать, удалять и отправлять своему специалисту.",
    number: "/images/works/1.svg",
    location_number:
      "right-0 max-xl:top-[-10px] max-xl:h-[300px] max-xl:w-[116px] xl:right-20 ",
  },
  [HOW_IT_WORKS_CARDS.CHART]: {
    id: "card2",
    bg_color: "bg-[#EFECFC]",
    text_color: "text-black",
    size_phone:
      "w-[290px] h-[260px] md:w-[360px] md:h-[330px] xl:w-[500px] xl:h-[585px] left-[69px]",
    phone: "/images/works/Mockups2.png",
    small_phone: "/images/works/Mockups2m.png",
    alt: "phone_chart",
    border: "border_dark.png",
    text1: "Как разобраться в статистике",
    text2: () =>
      "Мира составляет статистику очень простым и понятным способом. Она формируется на основе обстоятельств (факторов), которые на протяжении жизни влияют на эмоции.",
    text3:
      "Таким образом, зайдя в статистику, можно сразу понять, какие сферы жизни влияют на вас больше всего, какие из них дают больше отрицательных эмоций, а какие – положительных.",
    number: "/images/works/2.svg",
    location_number:
      "right-0 max-xl:top-5 xl:bottom-[0.5px] max-xl:h-[300px] max-xl:w-[186px]",
  },
  [HOW_IT_WORKS_CARDS.PRAXIS]: {
    id: "card3",
    bg_color: "bg-violet",
    text_color: "text-white",
    size_phone:
      "w-[300px] h-[270px] left-[40px] md:w-[360px] md:h-[330px] xl:w-[565px] xl:h-[595px] left-[9px] bottom-[-5px] ",
    phone: "/images/works/Mockups3.png",
    small_phone: "/images/works/Mockups3m.png",
    alt: "phone_praxis",
    border: "border_light.png",
    text1: "Как проходить упражнения",
    text2: () =>
      "Мира разработана таким образом, что она сама предлагает упражнение, которое подходит под ситуацию. В конце чек-ина она подбирает технику, основываясь на информации записи.",
    text3:
      "Техники, которые Мира подобрала для пользователя, можно найти в соответствующем разделе меню и пройти в любое время. Список упражнений будет пополняться по мере взаимодействия с приложением.",
    number: "/images/works/3.svg",
    location_number: "right-0 max-xl:top-5 max-xl:h-[300px] max-xl:w-[208px]",
  },
};

const DetailedCard = (props) => {
  const card = useMemo(() => {
    return CARDS_MAPPER[props.type];
  }, [props.type]);

  return (
    <div className="card" id={card.id}>
      <div
        className={`relative overflow-hidden w-full xl:h-[625px] lg:h-[810px] sm:h-[610px] md:h-[800px] p-[20px] lg:pt-10  ${card.bg_color} rounded-[20px] z-10 duration-500`}
      >
        <img
          className={`absolute max-xl:hidden ${card.size_phone}`}
          src={card.phone}
          alt="phone"
        />
        <img
          className={`absolute ${card.location_number} max-xl:w-[116px] max-xl:h-[300px]`}
          src={card.number}
          alt="card-number"
        />

        <div
          className={`flex flex-col max-xl:mx-auto xl:relative xl:left-[calc(50%-10px)] gap-5 sm:max-w-[420px] xl:max-w-[480px] lg:w-full ${card.text_color}`}
        >
          <span className="text-2xl xl:text-[40px] max-xl:text-3xl leading-[44px] tracking-[0.5px]">
            {card.text1}
          </span>

          <span className="text-sm md:text-base xl:text-lg leading-[16px] font-medium xl:font-normal xl:leading-[22px] tracking-[0.5px] xl:tracking-[0.7px]">
            {card.text2()}
          </span>
          <img src={`/images/works/${card.border}`} alt="#" />
          <span className="text-[14px] md:text-xl xl:text-[28px] leading-[18px] xl:leading-[38px] tracking-[0.1px] xl:tracking-[0.7px] font-medium xl:font-normal">
            {card.text3}
          </span>
          <img src={`/images/works/${card.border}`} alt="#" />
          <img
            className={`xl:hidden flex justify-center items-center mx-auto ${card.size_phone}`}
            src={card.small_phone}
            alt="phone"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
