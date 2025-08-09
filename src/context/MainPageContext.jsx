import { createContext, useState } from "react";

export const MainPageContext = createContext();

function MainPageProvider({ children }) {
  const [open, setOpen] = useState("");

  return (
    <MainPageContext.Provider value={{ open, setOpen }}>
      {children}
    </MainPageContext.Provider>
  );
}

export default MainPageProvider;
