import axios from "axios";
import { GameDto, GameSize, ModalState } from "../../models";
import useStore from "../../store";
import BaseModal from "./BaseModal";

const SoloInitializer = () => {
  const { modalState, setGrid, setModalState, setSize, size } = useStore();
  const close = () => setModalState(ModalState.NONE);
  const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URI,
  });
  const fetchRandomGame = () => {
    setModalState(ModalState.LOADING);
    axiosClient.get<GameDto>(`/games/random/${size}`).then(({ data: game }) => {
      setGrid(game);
      setModalState(ModalState.NONE);
    });
  };
  return (
    <BaseModal
      title={"Solo"}
      showModal={modalState === ModalState.SOLO}
      closeModal={() => close()}
    >
      <div className="h-40 w-96 p-4 flex justify-center items-center">
        <button
          className={`${
            size === GameSize.small
              ? "bg-green-500 "
              : "bg-transparent  hover:bg-white hover:text-green-500 active:bg-white "
          }border border-solid border-green-500 text-xs uppercase font-bold px-3 py-2 rounded-full outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150`}
          type="button"
          onClick={() => setSize(GameSize.small)}
        >
          Small
        </button>
        <button
          className={`${
            size === GameSize.normal
              ? "bg-green-500 "
              : "bg-transparent  hover:bg-white hover:text-green-500 active:bg-white "
          }border border-solid border-green-500 text-xs uppercase font-bold px-3 py-2 rounded-full outline-none focus:outline-none mb-1 ease-linear transition-all duration-150`}
          type="button"
          onClick={() => setSize(GameSize.normal)}
        >
          Normal
        </button>
      </div>
      {/*footer*/}
      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => close()}
        >
          Close
        </button>
        <button
          className="bg-green-500 text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-auto ease-linear transition-all duration-150"
          type="button"
          onClick={() => fetchRandomGame()}
        >
          Start
        </button>
      </div>
    </BaseModal>
  );
};

export default SoloInitializer;
