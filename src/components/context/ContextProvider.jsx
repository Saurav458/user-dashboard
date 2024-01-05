import { createContext, useState } from "react";

export const DashboardContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <DashboardContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default ContextProvider;
