import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FullBodyCardProps } from "../components/card/FullBodyCard.tsx";

interface CoffeeStoreProps {
  coffeeListView: FullBodyCardProps[];
  coffeeListInCart: FullBodyCardProps[];

  totalValue: () => number;
  totalWithDelivery: () => number;
  getCoffeeQuantity: (id: string) => number;
  getTotalItemsInCart: () => number;
  addOrUpdateCoffeeListView: (coffee: FullBodyCardProps) => void;
  addOrUpdateCoffeeListInCart: (coffee: FullBodyCardProps) => void;
  removeCoffeeFromCart: (id: string) => void;
}

export const useCoffeeStore = create<CoffeeStoreProps>()(
  persist(
    (set, get) => ({
      coffeeListView: [],
      coffeeListInCart: [],

      totalValue: () => {
        const { coffeeListInCart } = get();
        return coffeeListInCart.reduce(
          (acc, coffee) => acc + coffee.price * (coffee.quantity || 0),
          0,
        );
      },

      totalWithDelivery: () => {
        if (get().coffeeListInCart.length === 0) {
          return 0;
        } else {
          return get().totalValue() + 3.5;
        }
      },

      getCoffeeQuantity: (id: string) => {
        const item = get().coffeeListView.find((c) => c.id === id);
        return item?.quantity ?? 0;
      },

      getTotalItemsInCart: () => {
        const { coffeeListInCart } = get();
        return coffeeListInCart.reduce(
          (acc, coffee) => acc + (coffee.quantity || 0),
          0,
        );
      },

      addOrUpdateCoffeeListView: (coffeeItem: FullBodyCardProps) => {
        const { coffeeListView } = get();

        if (coffeeItem.quantity === 0) {
          set({
            coffeeListView: coffeeListView.filter(
              (c) => c.id !== coffeeItem.id,
            ),
          });
          return;
        }

        const index = coffeeListView.findIndex((c) => c.id === coffeeItem.id);

        if (index !== -1) {
          const updated = [...coffeeListView];
          updated[index] = {
            ...updated[index],
            ...coffeeItem,
            quantity: coffeeItem.quantity ?? updated[index].quantity,
          };
          set({ coffeeListView: updated });
        } else {
          set({
            coffeeListView: [
              ...coffeeListView,
              { ...coffeeItem, quantity: coffeeItem.quantity ?? 1 },
            ],
          });
        }
      },

      addOrUpdateCoffeeListInCart: (coffeeItem: FullBodyCardProps) => {
        const { coffeeListInCart } = get();

        if (coffeeItem.quantity === 0) {
          set({
            coffeeListInCart: coffeeListInCart.filter(
              (c) => c.id !== coffeeItem.id,
            ),
          });
          return;
        }

        const index = coffeeListInCart.findIndex((c) => c.id === coffeeItem.id);

        if (index !== -1) {
          const updated = [...coffeeListInCart];
          updated[index] = {
            ...updated[index],
            ...coffeeItem,
            quantity: coffeeItem.quantity ?? updated[index].quantity,
          };
          set({ coffeeListInCart: updated });
        } else {
          set({
            coffeeListInCart: [
              ...coffeeListInCart,
              { ...coffeeItem, quantity: coffeeItem.quantity ?? 1 },
            ],
          });
        }
      },

      removeCoffeeFromCart: (id) => {
        const cart = get().coffeeListInCart.filter((c) => c.id !== id);
        set({ coffeeListInCart: cart });
        set({ coffeeListView: cart });
      },
    }),
    { name: "coffee-store" },
  ),
);
