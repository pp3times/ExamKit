const BarBtn = (props) => {
  const Icon = () => (
    <div className="flex-none w-12 truncate self-center text-center">
      {props.icon}
    </div>
  );
  return (
    <button
      className={`flex items-stretch text-left px-2 w-full h-20 rounded-md mb-3 cursor-pointer ease-in duration-100 ${
        props.active
          ? "bg-[#037AFF] hover:bg-[#278cff]"
          : "bg-[#696767] hover:bg-[#807d7d]"
      }`}
      type="button"
      onClick={() => console.log("Click")}
    >
      {props.icon ? <Icon /> : ""}
      <div className="grow truncate self-center font-bold">{props.text}</div>
    </button>
  );
};

export default BarBtn;
