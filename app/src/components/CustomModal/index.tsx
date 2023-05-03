import React from 'react';
import Modal from 'react-modal';
import './styles.scss';

interface ICustomModal {
  isOpen: boolean;
  closeModal: () => void;
  message: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  child: any;
  tryAgain: (() => void) | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  root: any;
  closeShow: boolean;
  closeMessage: string;
}

export default function CustomModal({
  isOpen,
  closeModal,
  message,
  tryAgain,
  root,
  child,
  closeShow,
  closeMessage,
}: ICustomModal): React.ReactElement {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#97ed98',
      minWidth: '400px',
      maxWidth: '500px',
      borderRadius: '15px',
    },
  };
  return (
    <Modal
      appElement={document.getElementById('root') as HTMLElement}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      parentSelector={() => root.current}
    >
      <div className="modal">
        {child}
        {message && <h1 className="modal__message">{message}</h1>}
        <div className="modal__buttons">
          {closeShow && (
            <button className="modal__close" onClick={closeModal}>
              {closeMessage}
            </button>
          )}
          {tryAgain && (
            <button className="modal__try-again" onClick={tryAgain}>
              Try again
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
