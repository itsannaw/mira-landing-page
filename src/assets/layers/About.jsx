import Hashtag from "../../components/Hashtag";
import TextAboutApp from "../../components/TextAboutApp";
import { TEXT_ABOUT_TYPES } from "../../const";

const About = () => {
  return (
    <section id="about" className="flex relative mt-[120px] flex-col gap-10">
        <div className="absolute">
          <Hashtag># О приложении</Hashtag>
        </div>
      <div className="flex justify-center gap-[60px]">
        <div className="flex flex-col max-w-[397px] mt-[128px] w-full gap-10">
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
          <span className="text-black text-[40px] leading-[44px] tracking-[0.5px]">
            Зачем было создано <br /> это приложение?
          </span>
          <TextAboutApp type={TEXT_ABOUT_TYPES.CHECK}>
            Чтобы лучше разобраться в себе, в своих чувствах и мыслях, научиться
            жить в гармонии с собой и другими, было создано приложение «Мира».
          </TextAboutApp>
          <TextAboutApp type={TEXT_ABOUT_TYPES.LIKE}>
            Мира не просто играет роль спутника, но и является другом, с которым
            легко делиться переживаниями. Она подбирает подходящие варианты
            небольших, но эффективных техник, опираясь на психологическое
            состояние, и формирует аналитику, где можно смотреть, что влияет на
            ментальное здоровье.
          </TextAboutApp>
        </div>
      </div>
    </section>
  );
};

export default About;
