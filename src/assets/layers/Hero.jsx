import Button from "../../components/Button";
import { BUTTON_TYPES } from "../../const";

const Hero = () => {
  return (
    <section className="bg-hero bg-bottom lg:bg-none bg-[length:1440px_560px] bg-no-repeat">
      <div className="flex mt-[100px] lg:mt-56">
        <div className="flex flex-col justify-center lg:max-h-[660px] lg:bg-hero bg-bottom bg-no-repeat lg:rounded-[40px] bg-[length:1440px_560px] w-full px-[20px] lg:px-[40px] xl:px-[130px] lg:pt-[50px] lg:pb-[160px]">
          <div className="flex flex-col lg:flex-row relative pt-[28px] pb-[20px] lg:py-[40px] lg:px-[60px] max-[1045px] w-full lg:bg-white rounded-[40px] lg:shadow-hero">
            <div className="flex flex-col lg:mb-[34px] lg:gap-7">
              <div className="flex flex-col">
                <span className="text-[26px] mb-5 text-center lg:text-left font-medium lg:font-normal leading-[30px] lg:text-[40px] 2xl:text-[56px] lg:max-w-[500px] 2xl:max-w-[700px] lg:leading-[50px] 2xl:leading-[64px] tracking-[0.7px]">
                  Ментальная поддержка в вашем смартфоне
                </span>
              </div>
              <div className="text-center font-medium lg:font-normal text-sm lg:text-lg leading-[18px] lg:leading-[22px] tracking-[0.7px] lg:text-left flex flex-col lg:max-w-[400px] gap-5">
                <span>
                  Познакомьтесь с приложением «Мира» – трекером эмоций с
                  возможностью выполнять особые упражнения для улучшения своего
                  состояния.
                </span>
                <span>
                  Установите «Миру» и начните путь к гармонии с собой.
                </span>
              </div>
              <div className="flex lg:absolute lg:top-[-80px] lg:right-[120px] 2xl:top-[-80px] 2xl:right-[90px]">
                <img
                  className="mx-auto h-[300px] w-[180px] lg:h-[500px] lg:w-[300px] 2xl:h-[545px] 2xl:w-[335px]"
                  src="/images/Rectangle.png"
                  alt="phone"
                />
              </div>
              <div className="flex">
                <Button
                  className="max-lg:mx-auto max-lg:w-full justify-center max-w-[330px] lg:max-w-none"
                  type={BUTTON_TYPES.BIG}
                >
                  Скачать версию для Android
                </Button>
              </div>
              <div className="hidden lg:block relative">
                <img
                  className="absolute w-[86px] h-[58px] left-[-94px] top-4"
                  src="/images/vectors/VectorHero.png"
                  alt="cloud_part"
                />
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-end absolute top-[350px] right-[60px] gap-2">
              <img src="/images/QR.jpg" alt="#" />
              <span className="flex text-sm text-end">
                Скачать приложение <br /> на смартфон
              </span>
            </div>
          </div>
          <div className="hidden lg:flex relative justify-end mt-7">
            <Button
              type={BUTTON_TYPES.BIG_ORANGE}
              className="lg:text-lg 2xl:text-2xl font-semibold leading-7 tracking-[0.1px]"
            >
              Хочу узнать о приложении
            </Button>
            <img
              className="absolute w-16 h-10 buttom-[0px] right-[-15px] top-5"
              src="/images/vectors/VectorButton.png"
              alt="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
