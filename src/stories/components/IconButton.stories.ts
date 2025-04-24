import { Meta, type StoryObj } from "@storybook/react";
import { IconButton } from "../../components/button/IconButton";
import { Alien } from "@phosphor-icons/react";
import { createElement } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "IconButton is a button component that displays an icon. It can be used to trigger actions in the application.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    variant: "icon",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "icon"],
      description:
        "The variant of the button. Can be 'primary', 'secondary', or 'icon'.",
      table: {
        type: { summary: '"primary" | "secondary" | "icon"' },
      },
    },
    icon: {
      control: false,
      description: "Icon to be displayed inside the button.",
    },
    onClick: {
      description: "Function to be called when the button is clicked.",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    variant: "icon",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const CustomIcon: Story = {
  args: {
    variant: "icon",
    icon: createElement(Alien, { weight: "fill" }),
  },
};
