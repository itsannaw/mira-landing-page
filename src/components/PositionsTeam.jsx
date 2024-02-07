import { useMemo } from "react";
import { TEAM } from "../const";

const TEAM_MAPPER = {
  [TEAM.ANDROID_EVGENIY]: {
    src: "/images/team/avatars/EvgeniyAndroid.png",
    alt: "img",
    first_name: "Евгений",
    last_name: "Рыжиков",
    position: "Android-разработчик",
  },
  [TEAM.PROJECT_MANAGER_MARIA]: {
    src: "/images/team/avatars/MariaPM.png",
    alt: "img",
    first_name: "Мария",
    last_name: "Калашникова",
    position: "Project Manager, UX/UI",
  },
  [TEAM.PROJECT_MANAGER_VIKTORIA]: {
    src: "/images/team/avatars/ViktoriaPM.png",
    alt: "img",
    first_name: "Виктория",
    last_name: "Машенцева",
    position: "Project Manager",
  },
  [TEAM.PSIHOLOG_IRINA]: {
    src: "/images/team/avatars/IrinaPsiholog.png",
    alt: "img",
    first_name: "Ирина",
    last_name: "Гречушенко",
    position: "Психолог",
  },
  [TEAM.QA_MARINA]: {
    src: "/images/team/avatars/MarinaQA.png",
    alt: "img",
    first_name: "Марина",
    last_name: "Кузнецова",
    position: "QA-engineer",
  },
  [TEAM.QA_MARIA]: {
    src: "/images/team/avatars/MariaQA.png",
    alt: "img",
    first_name: "Мария",
    last_name: "Князькова",
    position: "QA-engineer",
  },
  [TEAM.FRONTEND_ANNA]: {
    src: "/images/team/avatars/AnnaFrontend.png",
    alt: "img",
    first_name: "Анна",
    last_name: "Галькевич",
    position: "Frontend-разработчик",
  },
  [TEAM.QA_IRINA]: {
    src: "/images/team/avatars/IrinaQA.png",
    alt: "img",
    first_name: "Ирина",
    last_name: "Ярмолюк",
    position: "QA-engineer",
  },
  [TEAM.UXUI_ANDREY]: {
    src: "/images/team/avatars/AndreyUXUI.png",
    alt: "img",
    first_name: "Андрей",
    last_name: "Колесников",
    position: "UX/UI",
  },
  [TEAM.AQA_NATALIA]: {
    src: "/images/team/avatars/NataliaAQA.png",
    alt: "img",
    first_name: "Наталья",
    last_name: "Фамилия",
    position: "AQA-engineer",
  },
  [TEAM.BA_ELENA]: {
    src: "/images/team/avatars/ElenaBA.png",
    alt: "img",
    first_name: "Елена",
    last_name: "Каминская",
    position: "Бизнес-аналитик",
  },
  [TEAM.BACKEND_ARTEM]: {
    src: "/images/team/avatars/ArtemBackend.png",
    alt: "img",
    first_name: "Артем",
    last_name: "Наш Артем",
    position: "Backend-разработчик",
  },
  [TEAM.DA_ALENA]: {
    src: "/images/team/avatars/AlenaDA.png",
    alt: "img",
    first_name: "Алена",
    last_name: "Плотникова",
    position: "Data-аналитик",
  },
  [TEAM.BACKEND_SERGEY]: {
    src: "/images/team/avatars/SergeyBackend.png",
    alt: "img",
    first_name: "Сергей",
    last_name: "Терещенко",
    position: "Backend-разработчик",
  },
  [TEAM.ILLUSTRATOR_IRINA]: {
    src: "/images/team/avatars/IrinaIllustrator.png",
    alt: "img",
    first_name: "Ирина",
    last_name: "Козлова",
    position: "Иллюстратор",
  },
  [TEAM.FULLSTACK_ANONIM]: {
    src: "/images/team/avatars/Anonim.png",
    alt: "img",
    first_name: "Тот, кого мы ищем",
    last_name: "",
    position: "Fullstack superhero",
  },
};

const PositionsTeam = (props) => {
  const team = useMemo(() => {
    return TEAM_MAPPER[props.type];
  }, [props.type]);

  return (
    <div className="flex flex-col px-1 xl:max-w-[287px] max-w-[329px] w-full border-b-2 border-[#CFD0DA] pb-[10px]">
      <div className="flex xl:max-w-[287px] xl:h-[65.5px] gap-[10px] xl:gap-[20px] w-full items-center">
        <img id="team_avatar" src={team.src} alt={team.alt} />
        <div className="flex xl:flex-col xl:items-start min-[1345px]:gap-1 justify-between w-full">
          <div className="flex flex-col max-xl:max-w-[100px] text-sm xl:text-lg font-medium xl:font-normal leading-[18px] xl:leading-[22px] tracking-[0.1px] xl:tracking-[0.7px]">
            <span>{team.first_name}</span>
            <span>{team.last_name}</span>
          </div>

          <span className="flex max-xl:max-w-[130.91px] text-xs xl:text-sm text-end xl:text-start  leading-[16px] xl:leading-[18px]">
            {team.position}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PositionsTeam;
