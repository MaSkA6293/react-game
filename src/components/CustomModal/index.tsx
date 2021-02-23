import React from "react";
import ReactModal from "react-modal";
import "./styles.scss";
interface ICustomModal {
  isOpen: boolean;
  closeModal: () => void;
  message: string;
  tryAgain: () => void;
}

export default function CustomModal({
  isOpen,
  closeModal,
  message,
  tryAgain,
}: ICustomModal): React.ReactElement {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#97ed98",
      minWidth: "400px",
    },
  };
  return (
    <ReactModal
      appElement={document.getElementById("root") as HTMLElement}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modal">
        <h1 className="modal__message">{message}</h1>
        <div className="modal__buttons">
          <button className="modal__close" onClick={closeModal}>
            close
          </button>
          <button className="modal__try-again" onClick={tryAgain}>
            Try again
          </button>
        </div>
      </div>
    </ReactModal>
  );
}
