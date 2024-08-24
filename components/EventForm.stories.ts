import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/vue3";
import Component from "./EventForm.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseArgs: Story["args"] = {
  title: "storybook test",
  onConfirm: fn(),
};

export const Default: Story = {
  args: baseArgs,
};

export const WithStyle: Story = {
  args: baseArgs,
  decorators: [
    () => ({
      template:
        '<div style="background-color: #f0f0f0; padding: 1rem;"><story/></div>',
    }),
  ],
};

export const EmptyTitle: Story = {
  args: {
    ...baseArgs,
    title: "",
  },
};
