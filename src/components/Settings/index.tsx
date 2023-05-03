import React from 'react';
import { ReactComponent as SoundOn } from '../../assets/soundOn.svg';
import { ReactComponent as SoundOff } from '../../assets/soundOff.svg';
import { ReactComponent as RemoveResults } from '../../assets/remove_results.svg';
import { ReactComponent as Rules } from '../../assets/rules.svg';
import { setBestResults } from '../../actionCreators';
import { useDispatch } from 'react-redux';
import CustomModal from '../CustomModal';
import './styles.scss';
import ConfirmModal from '../ConfirmModal';
interface ISettings {
  toggle: () => void;
  playing: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  myRoot: any;
}
export default function Settings({
  playing,
  toggle,
  myRoot,
}: ISettings): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [isRemoving, setIsRemoving] = React.useState(false);
  const [message, setMessage] = React.useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [child, setChild] = React.useState<any>();
  const [closeMessage, setCloseMessage] = React.useState('');
  const dispatch = useDispatch();

  const handleRemove = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    setMessage('Do you really want to remove all the best results?');
    setOpenConfirm(true);
  };
  const handleConfirm = () => {
    setIsRemoving(true);
    if (localStorage.getItem('results') !== undefined) {
      localStorage.setItem('results', '');
      dispatch(setBestResults(undefined));
    }
    setMessage('Removing...');
    setTimeout(() => {
      setMessage('The results was successfully removed');
      setTimeout(() => {
        setOpenConfirm(false);
        setIsRemoving(false);
      }, 1000);
    }, 1000);
  };
  const handleShowRules = () => {
    setOpen(true);
    setMessage('');
    setChild(textRule());
    setCloseMessage('Ok');
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const textRule = () => {
    return (
      <div className="settings__rules">
        <h2 className="settings__title">Rules</h2>
        <p className="settings__text">
          {' '}
          You need to sort out the task on the scoreboard above and choose the
          correct answer
        </p>
      </div>
    );
  };
  return (
    <div className="settings">
      {myRoot.current && (
        <CustomModal
          isOpen={open}
          closeModal={closeModal}
          root={myRoot}
          tryAgain={undefined}
          message={message}
          child={child}
          closeShow={!!closeMessage}
          closeMessage={closeMessage}
        />
      )}
      {myRoot.current && (
        <ConfirmModal
          isOpen={openConfirm}
          closeModal={() => setOpenConfirm(false)}
          root={myRoot}
          message={message}
          confirm={handleConfirm}
          isRemoving={isRemoving}
        />
      )}
      <ul className="settings__list">
        <li className="settings__list-item" onClick={toggle}>
          {playing ? <SoundOn /> : <SoundOff />}
        </li>
        <li className="settings__list-item" onClick={handleRemove}>
          <RemoveResults width="100%" height="100%" />
        </li>
        <li className="settings__list-item" onClick={handleShowRules}>
          <Rules width="100%" height="100%" />
        </li>
      </ul>
    </div>
  );
}
