import { Meta, type StoryObj } from "@storybook/react";
import { SmallBodyCard } from "../../components/card/SmallBodyCard";
import expressoImg from "../assets/expresso.png";
import latteImg from "../assets/latte.png";

const meta = {
  title: "Components/SmallBodyCard",
  component: SmallBodyCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "SmallBodyCard is a compact card component used for displaying items in cart or checkout views with quantity controls.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    name: "Expresso Tradicional",
    imageUrl: "/coffee-images/expresso.png",
    price: 9.9,
    quantity: 1,
  },
  argTypes: {
    name: {
      control: "text",
      description: "The name of the item.",
      table: {
        type: { summary: "string" },
      },
    },
    imageUrl: {
      control: "text",
      description: "URL to the item's image.",
      table: {
        type: { summary: "string" },
      },
    },
    price: {
      control: "number",
      description: "The price of the item (will be formatted as currency).",
      table: {
        type: { summary: "number" },
      },
    },
    quantity: {
      control: "number",
      description: "The initial quantity of the item.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
  },
} satisfies Meta<typeof SmallBodyCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Expresso Tradicional",
    imageUrl: expressoImg,
    price: 9.9,
    quantity: 1,
  },
};

export const MultipleItems: Story = {
  args: {
    name: "Latte",
    imageUrl: latteImg,
    price: 12.5,
    quantity: 3,
  },
};
