const SearchList = (props) => {
  return (
    <div className="flex gap-[12px] items-center">
      <div className="flex justify-center items-center w-[56px] h-[56px] bg-light_orange rounded-full">
        <img className="w-9 h-9" src="/images/works/Plus.svg" alt="plus" />
      </div>
      <span className="text-black font-medium xl:font-bold text-sm xl:text-lg leading-[18px] xl:leading-[22px] tracking-[0.1px] xl:tracking-[0.7px] ">
        {props.children}
      </span>
    </div>
  );
};

export default SearchList;
