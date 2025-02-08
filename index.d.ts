declare module 'react-easy-modal' {
    import { FC } from 'react';

    export interface ModalPortal {
        isOpen: boolean,
        background: object;
        className: string;
        modalContent: object;
        onClose: () => void;
    }
    export const MultipleSelect: FC<ModalPortal>;
}