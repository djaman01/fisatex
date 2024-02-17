import { createContext, useContext, useState } from "react";

const myContext = createContext();

export default function ContextComp({ children }) {
  
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <myContext.Provider value={{ openSidebar, setOpenSidebar }}>
      {children}
    </myContext.Provider>
  );
}

export const useMyContext = () => {
  return useContext(myContext);
};
