import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  type?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, type }) => {

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`hold-modal inset-0 flex ${
        type ? type : ""
      } justify-center animate-fadeInW`}
    >
      <div className="overlay bg-overlay"></div>
      <div className="modal">
        {onClose && (
          <div className="flex justify-end">
            <button
              className="text-gray-600 hover:text-gray-900"
            >
              Cerrar
            </button>
          </div>
        )}

        <div className="modal-wrapper bg-background text-foreground">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
