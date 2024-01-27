import Card from "../../components/Card";
import DetailedCard from "../../components/DetailedCard";
import Hashtag from "../../components/Hashtag";
import { HOW_IT_WORKS_CARDS } from "../../const";

const HowItWorks = () => {
  return (
    <section
      id="works"
      className="flex relative mt-[40px] lg:mt-[120px] flex-col gap-5 lg:gap-10"
    >
      <div className="lg:absolute">
        <Hashtag># Фичи и контент</Hashtag>
      </div>
      <div className="flex lg:absolute lg:max-w-[479px] left-[50%] flex-col text-center lg:text-start gap-[25px]">
        <span className=" text-black lg:text-[40px] text-2xl leading-[30px] lg:leading-[44px] tracking-[0.5px]">
          Как работает приложение?
        </span>
        <span className="text-black text-sm leading-[18px] font-medium lg:text-lg lg:leading-[22px] lg:tracking-[0.7px]">
          При создании Миры команда разработки опиралась на 3 главных «кита»,
          которые делают приложение таким полезным
        </span>
      </div>
      <div className="flex max-xl:flex-wrap max-xl:justify-center justify-between gap-4  lg:mt-[220px]">
        <Card type={HOW_IT_WORKS_CARDS.PLUS}>
          Вы фиксируете эмоции и мысли, которые с ними связаны, в любое удобное
          для вас время. «Мира» запоминает эти данные и бережно хранит их на
          вашем устройстве.
        </Card>
        <Card type={HOW_IT_WORKS_CARDS.CHART}>
          На основе сделанных записей Мира формирует статистику, которая поможет
          посмотреть на жизненную ситуацию со стороны: обратить внимание на
          аспекты, которые вызывают больше всего позитивных или, напротив,
          отрицтельных эмоций.
        </Card>
        <Card type={HOW_IT_WORKS_CARDS.PRAXIS}>
          Мира подбирает психотерапевтическую технику, опираясь на ваше
          состояние. Упражнения внимательно отобраны специалистом, проходятся за
          короткое время и имеют доказанную эффективность.
        </Card>
      </div>
      <div className="flex flex-col gap-5" id="cards">
        <DetailedCard type={HOW_IT_WORKS_CARDS.PLUS}></DetailedCard>
        <DetailedCard type={HOW_IT_WORKS_CARDS.CHART}></DetailedCard>
        <DetailedCard type={HOW_IT_WORKS_CARDS.PRAXIS}></DetailedCard>
      </div>
    </section>
  );
};

export default HowItWorks;
