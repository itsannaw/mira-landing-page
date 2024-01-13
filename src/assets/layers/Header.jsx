import Button from "../../components/Button";
import { BUTTON_TYPES } from "../../const";

const Header = () => {
  return (
    <section>
      <div className="flex fixed w-[calc(100%-120px)] bg-white z-20 left-[60px] top-0 justify-between items-center py-6 border-b-2 border-[#CFD0DA]">
        <div className="">
          <img src="/src/assets/images/Logo.svg" alt="#" />
        </div>
        <div className="flex justify-between items-center gap-10">
          <div className="flex gap-4">
            <a className="text-sm font-normal" href="#">
              О приложении
            </a>
            <a className="text-sm font-normal" href="#">
              Как работает
            </a>
            <a className="text-sm font-normal" href="#">
              О команде
            </a>
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
