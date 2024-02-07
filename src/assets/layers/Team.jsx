import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Button from "../../components/Button";
import Hashtag from "../../components/Hashtag";
import PositionsTeam from "../../components/PositionsTeam";
import SearchList from "../../components/SearchList";
import { BUTTON_TYPES, TEAM } from "../../const";

const Team = () => {
  return (
    <section className="flex relative max-[450px]:mt-[160px] min-[450px]:mt-[125px] min-[490px]:mt-[110px] min-[550px]:mt-[90px] sm:mt-[95px] md:mt-[110px] lg:mt-[200px] xl:mt-[150px] justify-center flex-col">
      <div id="team" className="lg:absolute top-0">
        <Hashtag>
          <span className="px-2"># Команда</span>
        </Hashtag>
      </div>
      <div className="flex flex-col-reverse xl:flex-row relative justify-center xl:justify-between xl:mr-[185px] xl:ml-8 max-xl:mx-auto gap-5 items-center xl:gap-[60px]">
        <div className="xl:hidden flex flex-col min-[450px]:mx-auto gap-3">
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
        <div className="xl:hidden max-w-[380px] w-full">
          <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
            <SwiperSlide>
              <div className="flex flex-col  max-w-[329px] w-full items-start gap-[10px] mb-10 xl:mb-12">
                <PositionsTeam type={TEAM.PROJECT_MANAGER_MARIA} />
                <PositionsTeam type={TEAM.PROJECT_MANAGER_VIKTORIA} />
                <PositionsTeam type={TEAM.PSIHOLOG_IRINA} />
                <PositionsTeam type={TEAM.QA_MARINA} />
                <PositionsTeam type={TEAM.ANDROID_EVGENIY} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col  max-w-[329px] w-full items-start gap-[10px] mb-10">
                <PositionsTeam type={TEAM.QA_MARIA} />
                <PositionsTeam type={TEAM.FRONTEND_ANNA} />
                <PositionsTeam type={TEAM.QA_IRINA} />
                <PositionsTeam type={TEAM.UXUI_ANDREY} />
                <PositionsTeam type={TEAM.AQA_NATALIA} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col  max-w-[329px] w-full items-start gap-[10px] mb-10">
                <PositionsTeam type={TEAM.BA_ELENA} />
                <PositionsTeam type={TEAM.BACKEND_ARTEM} />
                <PositionsTeam type={TEAM.DA_ALENA} />
                <PositionsTeam type={TEAM.BACKEND_SERGEY} />
                <PositionsTeam type={TEAM.ILLUSTRATOR_IRINA} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="max-xl:hidden flex gap-4 justify-center w-full xl:mt-[120px] xl:max-w-[589px]">
          <div className="flex flex-col gap-[10px] xl:max-w-[287px] w-full">
            <PositionsTeam type={TEAM.PROJECT_MANAGER_MARIA} />
            <PositionsTeam type={TEAM.PSIHOLOG_IRINA} />
            <PositionsTeam type={TEAM.ANDROID_EVGENIY} />
            <PositionsTeam type={TEAM.FRONTEND_ANNA} />
            <PositionsTeam type={TEAM.UXUI_ANDREY} />
            <PositionsTeam type={TEAM.BA_ELENA} />
            <PositionsTeam type={TEAM.DA_ALENA} />
            <PositionsTeam type={TEAM.ILLUSTRATOR_IRINA} />
          </div>
          <div className="flex flex-col gap-[10px] lg:max-w-[287px] w-full">
            <PositionsTeam type={TEAM.PROJECT_MANAGER_VIKTORIA} />
            <PositionsTeam type={TEAM.QA_MARINA} />
            <PositionsTeam type={TEAM.QA_MARIA} />
            <PositionsTeam type={TEAM.QA_IRINA} />
            <PositionsTeam type={TEAM.AQA_NATALIA} />
            <PositionsTeam type={TEAM.BACKEND_ARTEM} />
            <PositionsTeam type={TEAM.BACKEND_SERGEY} />
            <PositionsTeam type={TEAM.FULLSTACK_ANONIM} />
          </div>
        </div>
        <div className="flex flex-col gap-[20px] lg:max-xl:max-w-[390px] xl:max-w-[480px] w-full text-black text-sm leading-[18px] xl:text-lg xl:leading-[22px] xl:tracking-[0.7px]">
          <div className="text-center xl:text-left flex flex-col gap-3 lg:gap-[26px] max-lg:max-w-[460px] max-lg:mx-auto font-medium xl:font-normal">
            <div className="pt-[12px] lg:pt-0 text-black lg:text-[40px] font-normal max-lg:max-w-[340px]  max-lg:mx-auto text-2xl lg:leading-[44px] leading-[30px] tracking-[0.5px]">
              Кто разработал приложение?
            </div>

            <div>
              Мира была разработана командой из 15 человек. Над приложением
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
          <div className="hidden xl:flex xl:flex-col gap-5">
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
