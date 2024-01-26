import Button from "../../components/Button";
import { BUTTON_TYPES } from "../../const";

const Hero = () => {
  return (
    <section>
      <div className="flex mt-56">
        <div className="flex flex-col justify-center max-h-[660px] bg-hero bg-bottom bg-no-repeat rounded-[40px] bg-[length:1440px_560px] w-full px-[130px] pt-[50px] pb-[160px]">
          <div className="flex relative max-[1045px] w-full bg-white rounded-[40px] shadow-hero">
            <div className="flex flex-col mt-10 ml-14 mb-[74px] gap-7">
              <div className="flex flex-col">
                <span className="text-[56px] leading-[64px] tracking-[0.7px]">
                  Ментальная поддержка
                </span>
                <span className="text-[56px] leading-[64px] tracking-[0.7px]">
                  в вашем смартфоне
                </span>
              </div>
              <div className="flex flex-col max-w-96 gap-5">
                <span className="text-lg leading-[22px] tracking-[0.7px]">
                  Познакомьтесь с приложением «Мира» – трекером эмоций с
                  возможностью <br /> выполнять особые упражнения для <br />
                  улучшения своего состояния.
                </span>
                <span className="text-lg leading-[22px] tracking-[0.7px]">
                  Установите «Миру» и начните путь <br /> к гармонии с собой.
                </span>
              </div>
              <div className="flex">
                <Button type={BUTTON_TYPES.BIG}>
                  <span className="text-2xl font-semibold leading-7 tracking-[0.1px]">
                    Скачать версию для Android
                  </span>
                </Button>
              </div>
              <div className="relative">
                <img
                  className="absolute w-[86px] h-[58px] left-[-90px] top-4"
                  src="/src/assets/images/vectors/VectorHero.png"
                  alt="#"
                />
              </div>
            </div>
            <div className="flex absolute top-[-90px] right-[120px]">
              <img
                className="h-[545px] w-[335px]"
                src="/src/assets/images/Rectangle.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-end absolute top-[350px] right-[60px] gap-2">
              <img src="/src/assets/images/QR.jpg" alt="#" />
              <span className="flex text-sm text-end">
                Скачать приложение <br /> на смартфон
              </span>
            </div>
          </div>
          <div className="relative flex justify-end mt-7">
            <Button type={BUTTON_TYPES.BIG_ORANGE}>
              <span className="text-2xl font-semibold leading-7 tracking-[0.1px]">
                Хочу узнать о приложении
              </span>
            </Button>
            <img
              className="absolute w-16 h-10 buttom-[0px] right-[-15px] top-5"
              src="/src/assets/images/vectors/VectorButton.png"
              alt="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
