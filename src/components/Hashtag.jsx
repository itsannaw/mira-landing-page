const Hashtag = (props) => {
  return (
    <button className="text-violet text-[14px] px-[14px] py-3 border-violet rounded-2xl border-2 cursor-default">
      {props.children}
    </button>
  );
};

export default Hashtag;
