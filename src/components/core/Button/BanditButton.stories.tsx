import type { Meta, StoryObj } from "@storybook/vue3";
import type { BanditSize } from "@/types";

import ComponentDecorator from "@/components/storybook/ComponentDecorator.vue";
import BanditButton from "@/components/core/Button/BanditButton.vue";
import { MailCheck, Reply, Trash2, PenSquare } from "lucide-vue-next";

type Story = StoryObj<typeof BanditButton>;

const meta: Meta<typeof BanditButton> = { 
  component: BanditButton,
  decorators: [() => ({ template: '<div class="mb-4"><story /></div>' })],
};

const BUTTON_SIZES: BanditSize[] = ["mini", "compact", "default", "large"];

const DECORATOR_ITEMS = [
  { key: "rounded", value: true },
  { key: "disabled", value: true },
  { key: "rounded", value: false },
  { key: "prepend-icon", value: true },
  { key: "append-icon", value: true },
];

export const Primary: Story = {
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

export const Secondary: Story = {
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

export const Destructive: Story = {
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

export const Outline: Story = {
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