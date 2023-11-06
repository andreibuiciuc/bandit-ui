import type { Meta, StoryObj } from "@storybook/vue3";
import type { BanditSize, BanditVariant } from "@/types";

import ComponentDecorator from "@/components/storybook/ComponentDecorator.vue";
import BanditButton from "@/components/core/Button/BanditButton.vue";

import { MailCheck, Reply, Trash2, PenSquare } from "lucide-vue-next";

type Story = StoryObj<typeof BanditButton>;

const meta: Meta<typeof BanditButton> = { 
  component: BanditButton,
  argTypes: {
    label: {
      control: "text",
      description: "Button label"
    },
    variant: {
      control: "select",
      description: "Button variant, controls the style of the button",
      options: ["default", "secondary", "destructive", "outline"]
    },
    size: {
      control: "select",
      description: "Button sizes, controls the height of the button",
      options: ["default", "mini", "compact", "large"]
    },
    disabled: {
      control: "boolean",
      description: "Controls whether the button is disabled"
    },
    rounded: {
      control: "boolean",
      description: "Controls whether the button is rounded"
    },
  },
};

const BUTTON_SIZES: BanditSize[] = ["mini", "compact", "default", "large"];

const DECORATOR_ITEMS = [
  { key: "rounded", value: true },
  { key: "disabled", value: true },
  { key: "rounded", value: false },
  { key: "prepend-icon", value: true },
  { key: "append-icon", value: true },
];

/**
 * Used for important, non-destructive user actions
 */
export const Primary: Story = {
  render: () => ({
    components: { BanditButton },
    template: '<BanditButton label="Button" />'
  })
};

/**
 * Used in conjuction with the primary button to perform the complementary flow
 */
export const Secondary: Story = {
  render: () => ({
    components: { BanditButton },
    template: '<BanditButton label="Button" variant="secondary" />'
  })
};

/**
 * Used for actions with a destructive effect
 */
export const Destructive: Story = {
  render: () => ({
    components: { BanditButton },
    template: '<BanditButton label="Button" variant="destructive" />'
  })
};

/**
 * Used for secondary or tertiary actions and may denote a related flow
 */
export const Outline: Story = {
  render: () => ({
      components: { BanditButton },
      template: '<BanditButton label="Button" variant="outline" />'
  })
};

export const PrimaryReel: Story = {
  args: {
    variant: "default",
    label: "Check your Email"
  },
  render: (args) => ({
    components: { ComponentDecorator, BanditButton, MailCheck },
    setup() {
      return  { args, BUTTON_SIZES, DECORATOR_ITEMS };
    },
    template: `
      <div class="pb-8" v-for="size in BUTTON_SIZES" :key="size">
        <ComponentDecorator :row-key="size" :items="DECORATOR_ITEMS">
          <template #component="{ propKey, propValue }">
            <BanditButton v-bind="{ ...args, [propKey]: propValue }" :size="size">
              <template #prepend-icon v-if="propKey === 'prepend-icon'">
                <MailCheck />
              </template>
              <template #append-icon v-if="propKey === 'append-icon'">
                <MailCheck />
              </template>
            </BanditButton>
          </template>
        </ComponentDecorator>
      </div>
    `
  }) 
};

export const SecondaryReel: Story = {
  args: {
    variant: "secondary",
    label: "Go back"
  },
  render: (args) => ({
    components: { ComponentDecorator, BanditButton, Reply },
    setup() {
      return { args, BUTTON_SIZES, DECORATOR_ITEMS }
    },
    template: `
      <div class="pb-8" v-for="size in BUTTON_SIZES" :key="size">
        <ComponentDecorator :row-key="size" :items="DECORATOR_ITEMS">
          <template #component="{ propKey, propValue }">
            <BanditButton v-bind="{ ...args, [propKey]: propValue }" :size="size">
              <template #prepend-icon v-if="propKey === 'prepend-icon'">
                <Reply />
              </template>
              <template #append-icon v-if="propKey === 'append-icon'">
                <Reply />
              </template>
            </BanditButton>
          </template>
        </ComponentDecorator>
      </div>
    `
  })
};

export const DestructiveReel: Story = {
  args: {
    variant: "destructive",
    label: "Delete account",
  },
  render: (args) => ({
    components: { ComponentDecorator, BanditButton, Trash2 },
    setup() {
      return { args, BUTTON_SIZES, DECORATOR_ITEMS }
    },
    template: `
      <div class="pb-8" v-for="size in BUTTON_SIZES" :key="size">
        <ComponentDecorator :row-key="size" :items="DECORATOR_ITEMS">
          <template #component="{ propKey, propValue }">
            <BanditButton v-bind="{ ...args, [propKey]: propValue }" :size="size">
              <template #prepend-icon v-if="propKey === 'prepend-icon'">
                <Trash2 />
              </template>
              <template #append-icon v-if="propKey === 'append-icon'">
                <Trash2 />
              </template>
            </BanditButton>
          </template>
        </ComponentDecorator>
      </div>
    `
  }),
};

export const OutlineReel: Story = {
  args: {
    variant: "outline",
    label: "Save as Draft"
  },
  render: (args) => ({
    components: { ComponentDecorator, BanditButton, PenSquare },
    setup() {
      return { args, BUTTON_SIZES, DECORATOR_ITEMS }
    },
    template: `
      <div class="pb-8" v-for="size in BUTTON_SIZES" :key="size">
        <ComponentDecorator :row-key="size" :items="DECORATOR_ITEMS">
          <template #component="{ propKey, propValue }">
            <BanditButton v-bind="{ ...args, [propKey]: propValue }" :size="size">
              <template #prepend-icon v-if="propKey === 'prepend-icon'">
                <PenSquare />
              </template>
              <template #append-icon v-if="propKey === 'append-icon'">
                <PenSquare />
              </template>
            </BanditButton>
          </template>
        </ComponentDecorator>
      </div>
    `
  })
};

export default meta;