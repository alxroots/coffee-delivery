import { Meta, type StoryObj } from "@storybook/react";
import { InputText } from "../../components/input/InputText";

const meta = {
  title: "Components/InputText",
  component: InputText,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "InputText is a text input component with optional labeling. It shows an 'Opcional' indicator when not required.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    label: "Label here",
  },
  argTypes: {
    label: {
      control: "text",
      description: "The placeholder text for the input.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Label here" },
      },
    },
    required: {
      control: "boolean",
      description:
        "Determines if the input is required. Removes the 'Optional' label when true.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Input text",
    required: false,
  },
};

export const Required: Story = {
  args: {
    label: "Required input text",
    required: true,
  },
};
