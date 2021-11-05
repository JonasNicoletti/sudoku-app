interface BaseModalProps {
  title: string;
  showModal: boolean;
  closeModal: () => void;
}
const BaseModal: React.FC<BaseModalProps> = ({
  title,
  showModal,
  closeModal,
  children,
}) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex border-b border-solid border-blueGray-200 rounded-t">
                  <p className="m-auto text-green-500 text-3xl font-semibold text-center">
                    {title}
                    <span className="text-black text-3xl font-semibold text-center">
                      {" "}
                      Mode
                    </span>
                  </p>
                </div>
                {/*body*/}
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default BaseModal;
