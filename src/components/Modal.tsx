import React, { ReactNode, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
      className={`fixed inset-0 flex items-center justify-center z-50 animate-fadeInW bg-whiteOverlay dark:bg-black`}
    >
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
