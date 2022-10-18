import React, { useState } from "react";

export const NavContext = React.createContext<any>(undefined);

const NavProvider = ({ children }: any) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState("");

  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};

export default NavProvider;
