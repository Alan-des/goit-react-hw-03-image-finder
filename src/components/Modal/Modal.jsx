import Modal from 'react-modal';

Modal.setAppElement('#root');
const customStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    padding: 0,
  },
};

export const ImageModal = ({ isOpen, onClose, largeImageURL, tags }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img
        src={largeImageURL}
        alt={tags}
        style={{ width: '100%', display: 'block' }}
      />
    </Modal>
  );
};
