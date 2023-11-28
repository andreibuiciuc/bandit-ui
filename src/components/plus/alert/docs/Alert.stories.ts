import type { Meta, StoryObj } from '@storybook/vue3'
import { AlertTriangle, HeartHandshake } from 'lucide-vue-next'
import { Alert, AlertTitle, AlertDescription } from '@/components/plus/alert/index'

type Story = StoryObj<typeof Alert>

const meta: Meta<typeof Alert> = {
  component: Alert
}

/**
 * Primary alert
 */
export const Default: Story = {
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription, HeartHandshake },
    template: `
      <Alert>
        <HeartHandshake class="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli (not yet).
        </AlertDescription>
      </Alert>
    `
  })
}

/**
 * Destructve alert
 */
export const Destructive: Story = {
  render: () => ({
    components: { Alert, AlertTitle, AlertDescription, AlertTriangle },
    template: `
      <Alert variant="destructive">
        <AlertTriangle class="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    `
  })
}

export default meta
