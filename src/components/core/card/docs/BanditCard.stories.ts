import type { Meta, StoryObj } from '@storybook/vue3'
import BanditCard from '@/components/core/card/BanditCard.vue'
import BanditButton from '../../button/BanditButton.vue'
import { ChevronLeft, CloudSnow } from 'lucide-vue-next'

type Story = StoryObj<typeof BanditCard>

const meta: Meta<typeof BanditCard> = {
  component: BanditCard,
  argTypes: {
    customCardClass: {
      control: 'text',
      description: 'Custom tailwind css for the card container'
    },
    customHeaderClass: {
      control: 'text',
      description: 'Custom tailwind css for the card header container'
    },
    customTitleClass: {
      control: 'text',
      description: 'Custom tailwind css for the card title container'
    },
    customDescriptionClass: {
      control: 'text',
      description: 'Custom tailwind css for the card description container'
    },
    customContentClass: {
      control: 'text',
      description: 'Custom tailwind css for the card content container'
    },
    customFooterClass: {
      control: 'text',
      description: 'Custom tailwind css for the card footer container'
    }
  }
}

/**
 * Example of a usecase for the card component
 */
export const ShippingCard: Story = {
  args: {
    customCardClass: 'w-[400px]',
    customFooterClass: 'justify-end'
  },
  render: (args) => ({
    components: { BanditCard, BanditButton, ChevronLeft },
    setup: () => {
      return { args }
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

/**
 * Example of another usecase for the card component
 */
export const WeatherCard: Story = {
  args: {
    customCardClass: 'w-[360px] px-6 rounded-xl'
  },
  render: (args) => ({
    components: { BanditCard, BanditButton, CloudSnow },
    setup: () => {
      return { args }
    },
    template: `
      <BanditCard v-bind="args">
        <template #content>
          <div class="flex justify-between items-center">
            <div class="flex flex-col">
              <span class="text-lg">Snowy</span>
              <span class="text-xs text-accent-foreground">Now</span>
              <span class="mt-4 text-4xl">2°</span>
            </div>
            <CloudSnow size="64" />
          </div>
        </template>
      </BanditCard>
    `
  })
}

export default meta
