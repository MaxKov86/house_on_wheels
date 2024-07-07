import css from './DitailsModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const DitailsModal = ({ children, isOpen, closeModal }) => {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.backdrop}
      onRequestClose={closeModal}
      isOpen={isOpen}
    >
      {children}
    </Modal>
  );
};

export default DitailsModal;
