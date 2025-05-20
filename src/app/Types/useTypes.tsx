export type ModalType = {
    openModal: boolean;
    onClose: () => void;
    onOpen?: () => void;
    children?: any;
}