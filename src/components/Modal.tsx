import React, { ReactNode, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  type?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, type }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 300);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`hold-modal inset-0 flex ${
        type ? type : ""
      } justify-center animate-fadeInW`}
    >
      <div className="overlay bg-whiteOverlay"></div>
      <div className="modal">
        {onClose && (
          <div className="flex justify-end">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        )}

        <div className="modal-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
