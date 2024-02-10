
import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(<div className='modal' onClick={onClose}>

    <div style={{ backgroundColor: 'white', padding: '2rem', position: 'relative' }} onClick={(e) => e.stopPropagation()} >// This prevents the modal from closing when clicking inside
      {children}
    </div>
  </div>,
    document.body)


};

export default Modal;
