import { ModalState } from "../../models";
import useStore from "../../store";
import HeaderButton from "./HeaderButton";
import NavItem from "./NavItem";

function Header() {
  const { gameId, setModalState } = useStore();

  return (
    <>
      <nav className="relative flex items-center justify-between px-2 py-3 bg-green-500 mb-3">
        <div className="w-full px-4 flex items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <p className="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white">
              {gameId ? gameId : "Sudoku"}
            </p>
          </div>
          <div className={"flex flex-grow items-center"}>
            <ul className="flex flex-row list-none ml-auto">
              <NavItem>
                <HeaderButton
                  value="Challenge"
                  onClick={() => setModalState(ModalState.CHALLENGE)}
                />
              </NavItem>
              <NavItem>
                <HeaderButton
                  value="Solo"
                  onClick={() => setModalState(ModalState.SOLO)}
                />
              </NavItem>
              {/*  <NavItem>
                <HeaderButton value="Hint" onClick={() => {}} />
              </NavItem> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
