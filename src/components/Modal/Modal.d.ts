/// <reference types="react" />
import './modal.scss';
type ModalProps = {
    id?: string;
    active: boolean;
    children?: React.ReactNode;
};
declare const Modal: React.FC<ModalProps>;
type ModalContentProps = {
    className?: string;
    children?: React.ReactNode;
};
export declare const ModalContent: React.FC<ModalContentProps>;
export default Modal;
