import Button from "../../components/Button";
import Hashtag from "../../components/Hashtag";
import PositionsTeam from "../../components/PositionsTeam";
import SearchList from "../../components/SearchList";
import { BUTTON_TYPES, TEAM } from "../../const";

const Team = () => {
  return (
    <section className="flex relative mt-[120px] justify-center flex-col">
      <div className="flex">
        <div id="team" className="absolute left-0">
          <Hashtag>
            <span className="px-5"># Команда</span>
          </Hashtag>
        </div>
      </div>
      <div className="flex justify-center gap-[60px]">
        <div>
          <div className="flex flex-col gap-[14px] mt-[114px]">
            <PositionsTeam type={TEAM.ANDROID} />
            <PositionsTeam type={TEAM.ANDROID} />
            <PositionsTeam type={TEAM.ANDROID} />
            <PositionsTeam type={TEAM.ANDROID} />
            <PositionsTeam type={TEAM.ANDROID} />
            <PositionsTeam type={TEAM.ANDROID} />
            <PositionsTeam type={TEAM.ANDROID} />
            <PositionsTeam type={TEAM.ANDROID} />
          </div>
          <div className="flex justify-center mt-[20px] gap-4">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="5.5" stroke="#6E78D1" />
            </svg>

            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="5.5" stroke="#6E78D1" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-[26px] max-w-[480px] w-full text-black text-lg leading-[22px] tracking-[0.7px]">
          <span className=" text-black text-[40px] leading-[44px] tracking-[0.5px]">
            Как разработал <br /> приложение?
          </span>
          <span>
            Мира была разработана командой из N человек. Над приложением
            трудились специалисты разных сфер: аналитики, дизайнеры,
            разработчики и тестировщики.
          </span>
          <span>
            Контент и наполнение были подготовлены под строгим контролем
            практикующего психолога, специалиста в области
            когнитивно-поведенческой психотерапии.
          </span>
          <span>
            Работа над приложением ещё идет. Мы активно дорабатываем Миру,
            улучшая её и добавляя больше полезных функций.
          </span>
          <span>
            Хотите попасть в нашу команду? Напишите нам или оставьте заявку по
            кнопке ниже.
          </span>
          <span className="font-bold">Мы ищем:</span>
          <div className="flex flex-col gap-2">
            <SearchList>iOS-разработчиков</SearchList>
            <SearchList>Мамкиных пирожочков</SearchList>
            <SearchList>Fullstack superhero </SearchList>
          </div>
          <div>
            <form action="https://t.me/L_Tyler" target="_blank">
              <Button type={BUTTON_TYPES.BIG}>
                <span className="px-10 text-2xl font-semibold leading-7 tracking-[0.1px]">
                  Хочу в вашу команду
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
