const Footer = () => {
  return (
    <section>
      <div className="flex bg-white left-[60px] mt-[120px] justify-between py-6 border-t-2 border-[#CFD0DA]">
        <div className="flex flex-col gap-1">
          <span className="flex max-w-[170px] text-sm">
            Приложение создано при поддержке
          </span>
          <a href="https://pnpl.site" target="_blank" rel="noreferrer">
            <img src="/src/assets/images/footer/Pineapple.svg" alt="Pineapple Practice" />
          </a>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex flex-col items-end">
            <span className="flex text-sm">Остались вопросы?</span>
            <span className="text-sm">Напишите нам</span>
          </div>
          <div>
            <a href="https://t.me/L_Tyler" target="_blank" rel="noreferrer">
              <img
                src="/src/assets/images/footer/Telegram.svg"
                alt="telegram"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
