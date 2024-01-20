import Button from "../../components/Button";
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
      className="text-sm font-normal cursor-pointer"
      onClick={(e) => scrollToType(e, link.scrollType)}
    >
      {link.text}
    </a>
  ));

  return (
    <section>
      <div className="flex fixed w-[calc(100%-120px)] bg-white z-20 left-[60px] top-0 justify-between items-center py-6 border-b-2 border-[#CFD0DA]">
        <div>
          <a href="">
            <img src="/src/assets/images/Logo.svg" alt="#" />
          </a>
        </div>
        <div className="flex justify-between items-center gap-10">
          <div className="flex gap-4">
            {links[0]}
            {links[1]}
            {links[2]}
          </div>
          <div>
            <Button type={BUTTON_TYPES.SMALL}>
              <span className="text-sm font-normal">
                Скачать версию для Android
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
