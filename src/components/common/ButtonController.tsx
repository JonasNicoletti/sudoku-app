function CustomButton({
  displayName,
  onClick,
  isActive,
  disabled,
}: {
  displayName: string;
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
}) {
  return (
    <input
      type="button"
      className={
        "cursor-pointer border-none p-4 m-2 text-center inline-block rounded-lg font-medium"
      }
      value={displayName}
      onClick={() => onClick()}
      disabled={disabled}
    />
  );
}
export default CustomButton;
