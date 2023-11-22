import type { Meta, StoryObj } from '@storybook/vue3'
import { AlertTriangle, HeartHandshake } from 'lucide-vue-next'
import BanditAlert from '@/components/plus/alert/BanditAlert.vue'

type Story = StoryObj<typeof BanditAlert>

const meta: Meta<typeof BanditAlert> = {
  component: BanditAlert,
}

export const Default: Story = {
  render: () => ({
    components: { BanditAlert, HeartHandshake },
    template: `
      <BanditAlert>
        <template #icon>
          <HeartHandshake class="h-4 w-4" />
        </template>
        <template #title>Heads up!</template>
        <template #description>
          You can add components to your app using the cli (not yet).
        </template>
      </BanditAlert>
    `
  })
}

export const Destructive: Story = {
  render: () => ({
    components: { BanditAlert, AlertTriangle },
    template: `
      <BanditAlert variant="destructive">
        <template #icon>
          <AlertTriangle class="h-4 w-4" />
        </template>
        <template #title>Error</template>
        <template #description>
          Your session has expired. Please log in again.
        </template>
      </BanditAlert>
    `
  })
}

export default meta;