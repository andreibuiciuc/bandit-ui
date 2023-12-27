import type { Meta, StoryObj } from '@storybook/vue3'
import { AlertTriangle, HeartHandshake } from 'lucide-vue-next'
import { Alert, AlertTitle, AlertDescription, type AlertSlots } from '@/components/plus/alert/index'
import { html } from '@/utils/utils'

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
    template: html`
      <Alert>
        <HeartHandshake class="h-4 w-4" />
        <AlertTitle className="text-amber-500">Heads up!</AlertTitle>
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
    template: html`
      <Alert variant="destructive">
        <AlertTriangle class="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription> Your session has expired. Please log in again. </AlertDescription>
      </Alert>
    `
  })
}

export default meta
