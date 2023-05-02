import React from 'react';
import Modal from 'react-modal';

interface ICustomModal {
  isOpen: boolean;
  closeModal: () => void;
  confirm: () => void;
  message: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  root: any;
  isRemoving: boolean;
}

export default function ConfirmModal({
  isOpen,
  closeModal,
  confirm,
  message,
  root,
  isRemoving,
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
        {message && <h1 className="modal__message">{message}</h1>}

        <div className="modal__buttons">
          {!isRemoving && (
            <button className="modal__try-again" onClick={confirm}>
              Yes
            </button>
          )}
          {!isRemoving && (
            <button className="modal__close" onClick={closeModal}>
              Close
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
