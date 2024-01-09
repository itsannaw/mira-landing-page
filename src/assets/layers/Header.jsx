import Button from "../../components/Button";
import { BUTTON_TYPES } from "../../const";

const Header = () => {
  return (
    <section>
      <div className="flex justify-between items-center py-6 border-b-2">
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
              Скачать версию для Android
            </Button>
            <button className="flex py-2.5 px-6 rounded-xl bg-violet">
              <span className="text-white text-sm font-normal">
                Скачать версию для Android
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
