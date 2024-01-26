import { useMemo } from "react";
import { HOW_IT_WORKS_CARDS } from "../const";

const CARDS_MAPPER = {
  [HOW_IT_WORKS_CARDS.PLUS]: {
    id: "card1",
    bg_color: "bg-dark_violet",
    text_color: "text-white",
    size_phone: "w-[457px] h-[523px] left-[132px]",
    phone: "/images/works/Mockups1.png",
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
    location_number: "right-20",
  },
  [HOW_IT_WORKS_CARDS.CHART]: {
    id: "card2",
    bg_color: "bg-[#EFECFC]",
    text_color: "text-black",
    size_phone: "w-[500px] h-[585px] left-[69px]",
    phone: "/images/works/Mockups2.png",
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
    size_phone: "w-[565px] h-[595px] left-[9px] bottom-[-5px]",
    phone: "/images/works/Mockups3.png",
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
  const cards = useMemo(() => {
    return CARDS_MAPPER[props.type];
  }, [props.type]);

  return (
    <div className="card" id={cards.id}>
      <div
        className={`relative overflow-hidden w-full h-[625px] pt-10  ${cards.bg_color} rounded-[20px] z-10 duration-500`}
      >
        <div>
          <img
            className={`absolute  ${cards.size_phone}`}
            src={cards.phone}
            alt="#"
          />
        </div>
        <img
          className={`absolute ${cards.location_number}`}
          src={cards.number}
          alt="#"
        />

        <div
          className={`flex flex-col relative left-[calc(50%-10px)] gap-5 max-w-[480px] w-full ${cards.text_color}`}
        >
          <span className="text-[40px] leading-[44px] tracking-[0.5px]">
            {cards.text1}
          </span>

          <span className="text-lg leading-[22px] tracking-[0.7px]">
            {cards.text2()}
          </span>
          <img src={`/images/works/${cards.border}`} alt="#" />
          <span className="text-[28px] leading-[38px] tracking-[0.7px]">
            {cards.text3}
          </span>
          <img src={`/images/works/${cards.border}`} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
