import { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
