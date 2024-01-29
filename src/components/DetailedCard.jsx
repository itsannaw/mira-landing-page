import { useMemo } from "react";
import { HOW_IT_WORKS_CARDS } from "../const";

const CARDS_MAPPER = {
  [HOW_IT_WORKS_CARDS.PLUS]: {
    id: "card1",
    bg_color: "bg-dark_violet",
    text_color: "text-white",
    size_phone:
      "w-[457px] h-[523px] max-lg:w-[380px] max-lg:h-[342px] max-lg:left-[70px] left-[110px] max-lg:top-[80px]",
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
    location_number: "right-0 lg:right-20",
  },
  [HOW_IT_WORKS_CARDS.CHART]: {
    id: "card2",
    bg_color: "bg-[#EFECFC]",
    text_color: "text-black",
    size_phone:
      "max-lg:w-[400px] max-lg:h-[351px] max-lg:bottom-[100px] w-[500px] h-[585px] left-[69px]",
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
    location_number: "right-0 bottom-[0.5px]",
  },
  [HOW_IT_WORKS_CARDS.PRAXIS]: {
    id: "card3",
    bg_color: "bg-violet",
    text_color: "text-white",
    size_phone:
      "max-lg:w-[420px] max-lg:h-[420px] max-lg:bottom-[50px] max-xl:left-[40px] w-[565px] h-[595px] left-[9px] bottom-[-5px] ",
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
    location_number: "right-0",
  },
};

const DetailedCard = (props) => {
  const card = useMemo(() => {
    return CARDS_MAPPER[props.type];
  }, [props.type]);

  return (
    <div className="card" id={card.id}>
      <div
        className={`relative overflow-hidden w-full lg:h-[625px] p-[20px] lg:pt-10  ${card.bg_color} rounded-[20px] z-10 duration-500`}
      >
        <img
          className={`absolute max-xl:hidden ${card.size_phone}`}
          src={card.phone}
          alt="phone"
        />
        <img
          className={`absolute ${card.location_number} max-lg:w-[116px] max-lg:h-[300px]`}
          src={card.number}
          alt="card-number"
        />

        <div
          className={`flex flex-col max-xl:mx-auto xl:relative xl:left-[calc(50%-10px)] gap-5 lg:max-w-[480px] lg:w-full ${card.text_color}`}
        >
          <span className="text-2xl xl:text-[40px] max-xl:text-3xl leading-[44px] tracking-[0.5px]">
            {card.text1}
          </span>

          <span className="max-xl:text-base text-lg leading-[22px] tracking-[0.7px]">
            {card.text2()}
          </span>
          <img src={`/images/works/${card.border}`} alt="#" />
          <span className="max-xl:text-xl text-[28px] leading-[38px] tracking-[0.7px]">
            {card.text3}
          </span>
          <img src={`/images/works/${card.border}`} alt="#" />
          <img
            className={`xl:hidden ${card.size_phone}`}
            src={card.small_phone}
            alt="phone"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
