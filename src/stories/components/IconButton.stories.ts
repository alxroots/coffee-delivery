import { Meta, type StoryObj } from "@storybook/react";
import { IconButton } from "../../components/button/IconButton";
import { Alien } from "@phosphor-icons/react";
import { createElement } from "react";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    variant: "icon",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "icon"],
    },
    icon: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

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
