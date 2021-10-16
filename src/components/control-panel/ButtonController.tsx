function ButtonController({
  displayName,
  onClick,
  isActive,
  disabled,
}: {
  displayName: string;
  onClick: () => void;
  isActive: boolean;
  disabled?: boolean;
}) {
  return (
    <input
      type="button"
      className={`button-controller-button ${isActive ? "border" : ""}`}
      value={displayName}
      onClick={() => onClick()}
      disabled={disabled}
    />
  );
}
export default ButtonController;
