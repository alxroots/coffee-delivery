import { Meta, type StoryObj } from "@storybook/react";
import { Button } from "../../components/button/Button.tsx";
import { Alien } from "@phosphor-icons/react";
import { createElement } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Button is a component that triggers an action when clicked. It can be used to submit forms, open dialogs, or perform any other action in the application. In the has icon version variant won't affect the button.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    variant: "primary",
    hasIcon: false,
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary"],
      description:
        "The variant of the button. Can be 'primary', or 'secondary'.",
      table: {
        type: { summary: '"primary" | "secondary"' },
      },
    },
    onClick: {
      description: "Function to be called when the button is clicked.",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

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

export const IconButton: Story = {
  args: {
    variant: "primary",
    hasIcon: true,
    icon: createElement(Alien, { weight: "fill" }),
  },
};
