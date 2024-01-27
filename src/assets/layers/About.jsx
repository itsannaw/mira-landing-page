import Hashtag from "../../components/Hashtag";
import TextAboutApp from "../../components/TextAboutApp";
import { TEXT_ABOUT_TYPES } from "../../const";

const About = () => {
  return (
    <section
      id="about"
      className="flex relative mt-[40px] lg:mt-[120px] flex-col gap-6 lg:gap-10"
    >
      <div className="lg:absolute">
        <Hashtag># О приложении</Hashtag>
      </div>
      <div className="lg:max-w-[479px] text-center lg:text-left lg:absolute left-[50%] text-black lg:text-[40px] text-2xl leading-[30px] lg:leading-[44px] tracking-[0.5px]">
        Зачем было создано это приложение?
      </div>
      <div className="flex flex-wrap justify-center gap-x-[60px] gap-y-[40px] lg:mt-[128px]">
        <TextAboutApp
          className="w-full lg:max-w-[397px]"
          type={TEXT_ABOUT_TYPES.SMILE}
        >
          На протяжении жизни мы все испытываем самые разные эмоции и не всегда
          замечаем, какие обстоятельства на самом деле их вызывают.
        </TextAboutApp>
        <TextAboutApp
          className="w-full lg:max-w-[479px]"
          type={TEXT_ABOUT_TYPES.CHECK}
        >
          Чтобы лучше разобраться в себе, в своих чувствах и мыслях, научиться
          жить в гармонии с собой и другими, было создано приложение «Мира».
        </TextAboutApp>
        <TextAboutApp
          className="w-full lg:max-w-[397px]"
          type={TEXT_ABOUT_TYPES.DIALOGUE}
        >
          Для того чтобы было легче «общаться» с приложением, мы придумали
          персонажа-помощника, именем которого называется приложение. Персонаж
          будет вести диалог с пользователем на протяжении пути: задавать
          вопросы, предлагать выполнить упражнения или техники, помогающие
          справиться с эмоциями.
        </TextAboutApp>
        <TextAboutApp
          className="w-full lg:max-w-[479px]"
          type={TEXT_ABOUT_TYPES.LIKE}
        >
          Мира не просто играет роль спутника, но и является другом, с которым
          легко делиться переживаниями. Она подбирает подходящие варианты
          небольших, но эффективных техник, опираясь на психологическое
          состояние, и формирует аналитику, где можно смотреть, что влияет на
          ментальное здоровье.
        </TextAboutApp>
      </div>
    </section>
  );
};

export default About;
