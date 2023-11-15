import type { Meta, StoryObj } from '@storybook/vue3'
import BanditCard from '@/components/core/card/BanditCard.vue';
import BanditButton from '../../button/BanditButton.vue';
import { ChevronLeft } from "lucide-vue-next";

type Story = StoryObj<typeof BanditCard>

const meta: Meta<typeof BanditCard> = {
  component: BanditCard,
};

export const Card: Story = {
  args: {
    customCardClass: "w-[400px]",
    customFooterClass: "justify-end"
  },
  render: (args) => ({
    components: { BanditCard, BanditButton, ChevronLeft },
    setup: () => {
      return { args };
    },
    template: `
      <BanditCard v-bind="args">
        <template #title>Shipping Details</template>
        <template #description>Shipping cost may vary based on location</template>
        <template #content>
          <div class="flex justify-between pb-1">
            <div>Shipping</div>
            <div class="text-muted-foreground">$ 24.99</div>
          </div>
          <div class="flex justify-between pb-1">
            <div>Total VAT</div>
            <div class="text-muted-foreground">$ 10.00</div>
          </div>
          <div class="flex justify-between">
            <div>Total</div>
            <div class="text-lg">$ 34.99</div>
          </div>
        </template>
        <template #footer>
          <BanditButton label="Continue Shopping" variant="ghost" class="mr-2">
            <template #prepend-icon><ChevronLeft /></template>
          </BanditButton>
          <BanditButton label="Check Out" />
        </template>
      </BanditCard
    `
  })
}

export default meta