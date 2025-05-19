import { FullBodyCardProps } from "../components/card/FullBodyCard.tsx";

export interface AppContextProps {
  listCoffees: FullBodyCardProps[];
  handleUpdateListCoffee: (id: string, quantity: number) => void;
}
