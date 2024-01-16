import Hashtag from "../../components/Hashtag";
import TextAboutApp from "../../components/TextAboutApp";
import { TEXT_ABOUT_TYPES } from "../../const";

const About = () => {
  return (
    <section className="flex mt-[120px] flex-col gap-10">
      <div className="flex gap-[508px]">
        <div className="">
          <Hashtag># О приложении</Hashtag>
        </div>
        <div className="text-black text-[40px] leading-[44px] tracking-[0.5px]">
          <span>
            Зачем было создано <br /> это приложение?
          </span>
        </div>
      </div>
      <div className="flex justify-center max-w-[1320px] w-full gap-[60px]">
        <div className="flex flex-col max-w-[397px] w-full gap-10">
          <TextAboutApp type={TEXT_ABOUT_TYPES.SMILE}>
            На протяжении жизни мы все испытываем самые разные эмоции и не
            всегда замечаем, какие обстоятельства на самом деле их вызывают.
          </TextAboutApp>
          <TextAboutApp type={TEXT_ABOUT_TYPES.DIALOGUE}>
            Для того чтобы было легче «общаться» с приложением, мы придумали
            персонажа-помощника, именем которого называется приложение. Персонаж
            будет вести диалог с пользователем на протяжении пути: задавать
            вопросы, предлагать выполнить упражнения или техники, помогающие
            справиться с эмоциями.
          </TextAboutApp>
        </div>
        <div className="flex flex-col max-w-[479px] gap-10">
          <TextAboutApp type={TEXT_ABOUT_TYPES.SMILE}>
            Чтобы лучше разобраться в себе, в своих чувствах и мыслях, научиться
            жить в гармонии с собой и другими, было создано приложение «Мира».
          </TextAboutApp>
          <TextAboutApp type={TEXT_ABOUT_TYPES.DIALOGUE}>
            Мира не просто играет роль спутника, но и является другом, с которым
            легко делиться переживаниями. Она подбирает подходящие варианты
            небольших, но эффективных техник, опираясь на психологическое
            состояние, и формирует аналитику, где можно смотреть, что влияет
            на ментальное здоровье.
          </TextAboutApp>
        </div>
      </div>
    </section>
  );
};

export default About;
