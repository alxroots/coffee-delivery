import { Meta, type StoryObj } from "@storybook/react";
import { FullBodyCard } from "../../components/card/FullBodyCard";
import expressoImg from "../assets/expresso.png";
import latteImg from "../assets/latte.png";

const meta = {
  title: "Components/FullBodyCard",
  component: FullBodyCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "FullBodyCard is used to display coffee products with image, description, tags, price and purchase controls.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    imageUrl: expressoImg,
    price: 9.9,
    tags: ["Tradicional"],
  },
  argTypes: {
    name: {
      control: "text",
      description: "Coffee product name",
      table: {
        type: { summary: "string" },
      },
    },
    description: {
      control: "text",
      description: "Coffee product description",
      table: {
        type: { summary: "string" },
      },
    },
    imageUrl: {
      control: "text",
      description: "URL to the product image",
      table: {
        type: { summary: "string" },
      },
    },
    price: {
      control: "number",
      description: "Product price (will be formatted as currency)",
      table: {
        type: { summary: "number" },
      },
    },
    tags: {
      control: "object",
      description: "Product category tags",
      table: {
        type: { summary: "CoffeeTagType[]" },
      },
    },
  },
} satisfies Meta<typeof FullBodyCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    imageUrl: expressoImg,
    price: 9.9,
    tags: ["Tradicional"],
  },
};

export const WithMultipleTags: Story = {
  args: {
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    imageUrl: latteImg,
    price: 12.5,
    tags: ["Tradicional", "Com Leite"],
  },
};
