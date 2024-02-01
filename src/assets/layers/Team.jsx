import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Button from "../../components/Button";
import Hashtag from "../../components/Hashtag";
import PositionsTeam from "../../components/PositionsTeam";
import SearchList from "../../components/SearchList";
import { BUTTON_TYPES, TEAM } from "../../const";

const Team = () => {
  return (
    <section className="flex relative mt-[20px] max-[450px]:mt-[160px] min-[450px]:mt-[125px] min-[490px]:mt-[110px] min-[550px]:mt-[90px] sm:mt-[95px] md:mt-[110px] lg:mt-[200px] xl:mt-[170px] justify-center flex-col">
      <div id="team" className="lg:absolute top-0">
        <Hashtag>
          <span className="px-2"># Команда</span>
        </Hashtag>
      </div>
      <div className="flex flex-col-reverse lg:flex-row relative justify-center gap-5 lg:gap-[60px]">
        <div className="lg:hidden flex flex-col min-[450px]:mx-auto gap-3">
          <span className="mx-auto font-normal text-2xl leading-[30px] tracking-[0.5px]">
            Мы ищем:
          </span>
          <div className="flex flex-col gap-2">
            <SearchList>iOS-разработчиков</SearchList>
            <SearchList>Мамкиных пирожочков</SearchList>
            <SearchList>Fullstack superhero </SearchList>
          </div>
          <div className="mt-2">
            <form action="https://t.me/L_Tyler" target="_blank">
              <Button
                type={BUTTON_TYPES.BIG}
                className=" max-[450px]:w-full justify-center"
              >
                <span className="px-10 text-[16px] font-semibold leading-6 tracking-[0.1px]">
                  Хочу в вашу команду
                </span>
              </Button>
            </form>
          </div>
        </div>
        <div className="items-start lg:mt-[120px] lg:w-[420px] lg:mr-[-20px]">
          <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
            <SwiperSlide>
              <div className="flex flex-col items-start gap-[10px] mb-10 xl:mb-12">
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
              <div className="flex flex-col items-start gap-[10px]">
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
        <div className="flex flex-col gap-[20px] lg:max-xl:max-w-[390px] xl:max-w-[480px] w-full text-black text-sm leading-[18px] xl:text-lg xl:leading-[22px] xl:tracking-[0.7px]">
          <div className="text-center lg:text-left flex flex-col gap-3 lg:gap-[26px] max-lg:max-w-[460px] max-lg:mx-auto font-medium xl:font-normal">
            <div className="pt-[12px] lg:pt-0 text-black lg:text-[40px] font-normal max-lg:max-w-[340px]  max-lg:mx-auto text-2xl lg:leading-[44px] leading-[30px] tracking-[0.5px]">
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
          <div className="hidden lg:flex lg:flex-col gap-5">
            <span className="font-bold">Мы ищем:</span>
            <div className="flex flex-col gap-2">
              <SearchList>iOS-разработчиков</SearchList>
              <SearchList>Мамкиных пирожочков</SearchList>
              <SearchList>Fullstack superhero </SearchList>
            </div>
            <div>
              <form action="https://t.me/L_Tyler" target="_blank">
                <Button type={BUTTON_TYPES.BIG} className="py-1">
                  <span className="px-10 text-[20px] xl:text-2xl font-semibold leading-7 tracking-[0.1px]">
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
