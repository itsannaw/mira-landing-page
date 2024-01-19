import Card from "../../components/Card";
import DetailedCard from "../../components/DetailedCard";
import Hashtag from "../../components/Hashtag";
import { HOW_IT_WORKS_CARDS } from "../../const";

const HowItWorks = () => {
  return (
    <section className="flex mt-[120px] flex-col gap-10">
      <div className="flex gap-[508px]">
        <div className="">
          <Hashtag># Фичи и контент</Hashtag>
        </div>
        <div className="flex flex-col max-w-[480px] gap-[25px]">
          <span className=" text-black text-[40px] leading-[44px] tracking-[0.5px]">
            Как работает <br /> приложение?
          </span>
          <span className="text-black text-lg leading-[22px] tracking-[0.7px]">
            При создании Миры команда разработки опиралась на 3 главных «кита»,
            которые делают приложение таким полезным
          </span>
        </div>
      </div>
      <div className="flex justify-between">
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
      <div className="flex flex-col gap-5">
        <DetailedCard type={HOW_IT_WORKS_CARDS.PLUS}></DetailedCard>
        <DetailedCard type={HOW_IT_WORKS_CARDS.CHART}></DetailedCard>
        <DetailedCard type={HOW_IT_WORKS_CARDS.PRAXIS}></DetailedCard>
      </div>
    </section>
  );
};

export default HowItWorks;
