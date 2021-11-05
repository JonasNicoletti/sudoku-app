interface HeaderButtonProps {
  value: string;
  onClick: () => void;
}
function HeaderButton({ value, onClick }: HeaderButtonProps) {
  return (
    <button
      className="text-white bg-transparent border border-solid border-white hover:bg-white hover:text-green-500 active:bg-white text-xs uppercase font-bold px-3 py-2  rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={() => onClick()}
    >
      {value}
    </button>
  );
}

export default HeaderButton;
