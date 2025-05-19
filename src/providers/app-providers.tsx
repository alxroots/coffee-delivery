import { useState, ReactNode } from "react";
import { AppContext } from "./app-context.ts";
import { FullBodyCardProps } from "../components/card/FullBodyCard.tsx";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProvidersProps) {
  const [listCoffees, setListCoffees] = useState<FullBodyCardProps[]>([]);

  const handleUpdateListCoffee = (id: string, quantity: number) => {
    const coffeeIndex = listCoffees.findIndex((coffee) => coffee.id === id);

    if (coffeeIndex !== -1) {
      const updatedCoffees = [...listCoffees];
      updatedCoffees[coffeeIndex].quantity = quantity;
      setListCoffees(updatedCoffees);
    } else {
      const newCoffee = {
        id,
        quantity,
      } as FullBodyCardProps;
      setListCoffees((prev) => [...prev, newCoffee]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        listCoffees,
        handleUpdateListCoffee,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
