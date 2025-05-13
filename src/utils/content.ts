import { ServicePropTypes } from "../@types/services";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import expresso from "../assets/expresso.png";
import latte from "../assets/latte.png";
import americano from "../assets/americano.png";
import arabe from "../assets/arabian.png";
import capuccino from "../assets/capuccino.png";
import macchiato from "../assets/macchiato.png";
import mochaccino from "../assets/mochaccino.png";
import hotChocolate from "../assets/hot_chocolate.png";
import cuban from "../assets/cuban.png";
import hawaii from "../assets/hawaii.png";
import irish from "../assets/irish.png";
import creamy from "../assets/expresso_creamy.png";
import gelato from "../assets/gelato.png";
import withMilk from "../assets/with_milk.png";
import { FullBodyCardProps } from "../components/card/FullBodyCard.tsx";

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

export const coffeeDrinks: FullBodyCardProps[] = [
  {
    id: "expresso",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    imageUrl: expresso,
    tags: ["Tradicional"],
  },
  {
    id: "americano",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o expresso tradicional",
    price: 9.9,
    imageUrl: americano,
    tags: ["Tradicional"],
  },
  {
    id: "expresso-cremoso",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    imageUrl: creamy,
    tags: ["Tradicional"],
  },
  {
    id: "express-gelado",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    imageUrl: gelato,
    tags: ["Tradicional", "Gelado"],
  },
  {
    id: "cafe-com-leite",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    imageUrl: withMilk,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: "latte",
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    imageUrl: latte,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: "capuccino",
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    imageUrl: capuccino,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: "macchiato",
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    imageUrl: macchiato,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: "mochaccino",
    name: "Mochaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    imageUrl: mochaccino,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: "chocolate-quente",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    imageUrl: hotChocolate,
    tags: ["Especial", "Com Leite"],
  },
  {
    id: "cubano",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    imageUrl: cuban,
    tags: ["Especial", "Alcoólico", "Gelado"],
  },
  {
    id: "havaiano",
    name: "Havaiano",
    description:
      "Café do Havai com sabor adocicado e frutado, leve e refrescante",
    price: 9.9,
    imageUrl: hawaii,
    tags: ["Especial"],
  },
  {
    id: "arabe",
    name: "Árabe",
    description: "Café expresso com cardamomo, especiaria árabe",
    price: 9.9,
    imageUrl: arabe,
    tags: ["Especial"],
  },
  {
    id: "irlandes",
    name: "Irlandês",
    description: "Café expresso misturado com uísque, creme de leite e açúcar",
    price: 9.9,
    imageUrl: irish,
    tags: ["Especial", "Alcoólico"],
  },
];

export const smallSampleCheckoutCoffeeDrinks = [
  {
    id: "arabe",
    name: "Árabe",
    description: "Café expresso com cardamomo, especiaria árabe",
    price: 9.9,
    imageUrl: arabe,
    tags: ["Especial"],
  },
  {
    id: "irlandes",
    name: "Irlandês",
    description: "Café expresso misturado com uísque, creme de leite e açúcar",
    price: 9.9,
    imageUrl: irish,
    tags: ["Especial", "Alcoólico"],
  },
];
