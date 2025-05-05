import { Meta, type StoryObj } from "@storybook/react";
import { InputNumber } from "../../components/input/InputNumber";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/InputNumber",
  component: InputNumber,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "InputNumber is a numeric input component with increment/decrement controls. It allows users to select a numeric value within a range.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    initialValue: 1,
    onChange: fn(),
  },
  argTypes: {
    initialValue: {
      control: "number",
      description: "The starting value for the input.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    min: {
      control: "number",
      description: "The minimum allowed value.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    max: {
      control: "number",
      description: "The maximum allowed value.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "Infinity" },
      },
    },
    onChange: {
      action: "changed",
      description: "Function called when the input value changes.",
      table: {
        type: { summary: "function" },
      },
    },
  },
} satisfies Meta<typeof InputNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValue: 1,
  },
};

export const WithLimits: Story = {
  args: {
    initialValue: 5,
    min: 1,
    max: 10,
  },
};
