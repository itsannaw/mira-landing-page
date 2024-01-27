import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Button from "../../components/Button";
import Hashtag from "../../components/Hashtag";
import PositionsTeam from "../../components/PositionsTeam";
import SearchList from "../../components/SearchList";
import { BUTTON_TYPES, TEAM } from "../../const";

const Team = () => {
  return (
    <section className="flex relative mt-[175px] justify-center flex-col">
      <div className="flex">
        <div id="team" className="lg:absolute left-0">
          <Hashtag>
            <span className="px-5"># Команда</span>
          </Hashtag>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row relative justify-center gap-[60px]">
        <div className="block lg:hidden">
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
        <div className="items-start lg:mt-[120px] lg:w-[400px]">
          <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
            <SwiperSlide>
              <div className="flex flex-col items-start gap-[14px] mb-12">
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-start gap-[14px]">
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
                <PositionsTeam type={TEAM.ANDROID} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col gap-[26px] lg:max-w-[480px] w-full text-black text-lg leading-[22px] tracking-[0.7px]">
          <div className="text-center lg:text-left flex flex-col gap-[12px]">
            <div className="pt-[12px] lg:pt-0 text-black text-[40px] leading-[44px] tracking-[0.5px]">
              Кто разработал приложение?
            </div>
            <div>
              Мира была разработана командой из N человек. Над приложением
              трудились специалисты разных сфер: аналитики, дизайнеры,
              разработчики и тестировщики.
            </div>
            <div>
              Контент и наполнение были подготовлены под строгим контролем
              практикующего психолога, специалиста в области
              когнитивно-поведенческой психотерапии.
            </div>
            <div>
              Работа над приложением ещё идет. Мы активно дорабатываем Миру,
              улучшая её и добавляя больше полезных функций.
            </div>
            <div>
              Хотите попасть в нашу команду? Напишите нам или оставьте заявку по
              кнопке ниже.
            </div>
          </div>
          <div className="hidden lg:block">
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
      </div>
    </section>
  );
};

export default Team;
