import { SelectPaymentType } from "../../components/select/SelectPaymentType.tsx";
import { CreditCard } from "@phosphor-icons/react";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/SelectPaymentType",
  component: SelectPaymentType,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "SelectPaymentType is a component that allows the user to select a payment type. It can be used in forms or any other place where the user needs to select a payment type.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    Icon: CreditCard,
    label: "Cartão de crédito",
    isSelected: false,
    onClick: () => {
      console.log("Payment type selected");
    },
  },
  argTypes: {
    Icon: {
      control: false,
      description: "Icon to be displayed inside the button.",
    },
    label: {
      control: "text",
      description: "Label to be displayed inside the button.",
    },
    isSelected: {
      control: "boolean",
      description: "If true, the button will be highlighted.",
    },
    onClick: {
      description: "Function to be called when the button is clicked.",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof SelectPaymentType>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Icon: CreditCard,
    label: "Cartão de crédito",
    isSelected: false,
    onClick: () => console.log("Payment type selected"),
  },
};

export const Selected: Story = {
  args: {
    Icon: CreditCard,
    label: "Cartão de crédito",
    isSelected: true,
    onClick: () => console.log("Payment type selected"),
  },
};
