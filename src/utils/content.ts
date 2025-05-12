import { ServicePropTypes } from "../@types/services";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export const services: ServicePropTypes[] = [
  {
    id: "security",
    Icon: ShoppingCart,
    description: "Compra simples e segura",
    bgColor: "#C47F17",
  },
  {
    id: "packaging",
    Icon: Package,
    description: "Embalagem mantém o café intacto",
    bgColor: "#574f4d",
  },
  {
    id: "delivery",
    Icon: Timer,
    description: "Entrega rápida e rastreada",
    bgColor: "#dbac2c",
  },
  {
    id: "coffee",
    Icon: Coffee,
    description: "O café chega fresquinho até você",
    bgColor: "#8047f8",
  },
];
