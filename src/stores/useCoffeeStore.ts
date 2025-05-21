import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FullBodyCardProps } from "../components/card/FullBodyCard.tsx";

interface CoffeeStoreProps {
  listCoffees: FullBodyCardProps[];
  totalValue: () => number;
  totalWithDelivery: () => number;
  addOrUpdateCoffeeList: (id: string, coffeeItem: FullBodyCardProps) => void;
}

export const useCoffeeStore = create<CoffeeStoreProps>()(
  persist(
    (set, get) => ({
      listCoffees: [],
      totalValue: () => {
        const currentList = get().listCoffees;
        return currentList.reduce((acc, coffee) => {
          return acc + coffee.price * (coffee.quantity || 0);
        }, 0);
      },
      totalWithDelivery: () => {
        const deliveryFee = 3.5;
        const total = get().totalValue();
        return total + deliveryFee;
      },
      addOrUpdateCoffeeList: (id: string, coffeeItem: FullBodyCardProps) => {
        const currentList = get().listCoffees;
        const coffeeIndex = currentList.findIndex((coffee) => coffee.id === id);
        if (coffeeIndex !== -1) {
          const updatedCoffees = [...currentList];
          updatedCoffees[coffeeIndex].quantity = coffeeItem.quantity;
          updatedCoffees[coffeeIndex].price =
            coffeeItem.price * coffeeItem.quantity;
          set({ listCoffees: updatedCoffees });
          console.log("price", updatedCoffees[coffeeIndex].price);
        } else {
          const newCoffee = {
            ...coffeeItem,
          } as FullBodyCardProps;
          set({ listCoffees: [...currentList, newCoffee] });
        }
      },
    }),
    { name: "coffee-store" },
  ),
);
