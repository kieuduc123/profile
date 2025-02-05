import { useState, useEffect } from 'react';
import './modal.scss';

type ModalProps = {
  id?: string;
  active: boolean;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ id, active, children }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div id={id} className={`modal ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  );
};

type ModalContentProps = {
  className?: string;
  children?: React.ReactNode;
};

export const ModalContent: React.FC<ModalContentProps> = ({ className = '', children }) => {
  return <div className={`modal__content ${className}`}>{children}</div>;
};

export default Modal;