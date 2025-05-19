import { createContext, useContext } from "react";
import { AppContextProps } from "../@types/context";

export const AppContext = createContext<AppContextProps | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
