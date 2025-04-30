import { Meta, type StoryObj } from "@storybook/react";
import { Cart } from "../../components/cart/Cart.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default.ts";

const meta = {
  argTypes: {
    count: {
      control: { type: "number" },
      description: "Number of items in the cart",
      defaultValue: 0,
    },
  },
  component: Cart,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Component used to display how many items is in the cart",
      },
    },
  },
  tags: ["autodocs"],
  title: "Components/Cart",
} satisfies Meta<typeof Cart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 0,
  },
};

export const WithItems: Story = {
  args: {
    count: 3,
  },
};
