import { useMemo } from "react";
import { TEAM } from "../const";

const TEAM_MAPPER = {
  [TEAM.ANDROID]: {
    src: "/src/assets/images/team/random.png",
    alt: "img",
    first_name: "Имя",
    last_name: "Фамилия",
    position: "Разработчик на Android",
  },
};

const PositionsTeam = (props) => {
  const team = useMemo(() => {
    return TEAM_MAPPER[props.type];
  }, [props.type]);

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex max-w-[397px] w-full justify-between items-center">
        <div className="flex gap-8 items-center">
          <img src={team.src} alt={team.alt} />
          <div className="flex flex-col gap-1 text-lg leading-[22px] tracking-[0.7px]">
            <span>{team.first_name}</span>
            <span>{team.last_name}</span>
          </div>
        </div>
        <span className="text-sm leading-[18px]">{team.position}</span>
      </div>
      <img src="/src/assets/images/team/vector.png" alt="vector" />
    </div>
  );
};

export default PositionsTeam;
