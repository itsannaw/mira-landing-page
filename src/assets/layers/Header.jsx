import Button from "../../components/Button";
import DownloadButtonMob from "../../components/DownloadButtonMob";
import { BUTTON_TYPES } from "../../const";
import { SCROLL_TYPES, scrollToType } from "../../helpers/scrollToType";

const LINKS_META = [
  {
    text: "О приложении",
    scrollType: SCROLL_TYPES.ABOUT,
  },
  {
    text: "Как работает",
    scrollType: SCROLL_TYPES.WORKS,
  },
  {
    text: "О команде",
    scrollType: SCROLL_TYPES.TEAM,
  },
];

const Header = () => {
  const links = LINKS_META.map((link) => (
    <a
      key={link.text}
      className="text-sm lg:font-normal font-bold max-lg:leading-[16px] max-lg:tracking-[0.5px] cursor-pointer"
      onClick={(e) => scrollToType(e, link.scrollType)}
    >
      {link.text}
    </a>
  ));

  return (
    <section className="max-w-[1440px] mx-auto w-full">
      <div className="mira-header-before flex flex-col lg:flex-row fixed w-[calc(min(100%,1440px)-30px)] lg:w-[calc(min(100%,1440px)-80px)] bg-white z-20 left-[calc(50%-min(660px,calc((100%/2)-15px)))] lg:left-[calc(50%-min(680px,calc((100%/2)-40px)))] top-0 justify-between min-[450px]:items-center py-3 border-b-2 border-[#CFD0DA]">
        <div className="flex justify-between w-full z-10">
          <div className="w-[114px] h-[52px] lg:w-[131px] lg:h-[60px]">
            <a href="">
              <img src="/images/Logo.svg" alt="#" />
            </a>
          </div>
          <div className="flex justify-between items-center gap-10">
            <div className="hidden lg:flex gap-7">{links}</div>
            <div>
              <a href="https://cdn.discordapp.com/attachments/1204454830639292467/1205094564227063840/mira-v0.6.17-ip-release.apk?ex=65d71ec5&is=65c4a9c5&hm=5996fe0d9602f84f15aeb8c16ff3b560b888b6516ddd38b8b531e8f97b1ad5af&">
                <Button
                  type={BUTTON_TYPES.SMALL}
                  className="text-sm font-normal max-lg:hidden"
                >
                  Скачать версию для Android
                </Button>
              </a>
              <a href="https://cdn.discordapp.com/attachments/1204454830639292467/1205094564227063840/mira-v0.6.17-ip-release.apk?ex=65d71ec5&is=65c4a9c5&hm=5996fe0d9602f84f15aeb8c16ff3b560b888b6516ddd38b8b531e8f97b1ad5af&">
                <DownloadButtonMob />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-[10px] justify-between lg:hidden z-10">
          {links}
        </div>
      </div>
    </section>
  );
};

export default Header;
