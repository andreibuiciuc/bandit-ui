import type { Meta, StoryObj } from '@storybook/vue3'
import BanditCard from '@/components/core/card/BanditCard.vue'
import BanditButton from '../../button/BanditButton.vue'
import { ChevronLeft, CloudSnow } from 'lucide-vue-next'
import { cn } from '@/utils/utils'

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
    customCardClass: 'w-[300px] rounded-xl'
  },
  render: (args) => ({
    components: { BanditCard, BanditButton, CloudSnow },
    data: () => ({
      temperature: 2,
      activeScale: 'celsius'
    }),
    methods: {
      changeScale: function (newCelsiusClass: string) {
        if (this.activeScale === newCelsiusClass) {
          return;
        }

        if (newCelsiusClass === 'celsius') {
          this.temperature = Math.round((this.temperature - 32) / 1.8);
        } else {
          this.temperature = Math.round(this.temperature * 9/5 + 32);
        }

        this.activeScale = newCelsiusClass;
      }
    },
    setup: () => {
      return { args, cn }
    },
    template: `
      <BanditCard v-bind="args">
        <template #content>
          <div class="flex justify-between items-center">
            <div class="flex flex-col">
              <span class="text-lg">Drizzles</span>
              <span class="text-xs text-accent-foreground">Now</span>
              <div class="mt-4 text-2xl space-x-2">
                <span>{{ temperature }}</span>
                <span 
                  class="hover:cursor-pointer" 
                  :class="cn(activeScale === 'celsius' ? '' : 'text-muted-foreground')"
                  @click="changeScale('celsius')">
                    °C
                </span>
                <span 
                  class="hover:cursor-pointer" 
                  :class="cn(activeScale === 'fahrenheit' ? '' : 'text-muted-foreground')" 
                  @click="changeScale('fahrenheit')">
                    °F
                </span>
              </div>
            </div>
            <CloudSnow size="48" />
          </div>
        </template>
      </BanditCard>
    `
  })
}

export default meta
