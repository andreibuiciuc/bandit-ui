import type { Meta, StoryObj } from '@storybook/vue3'
import { ChevronRightIcon, MailOpen, RotateCw } from 'lucide-vue-next'
import Button from '@/components/core/button/Button.vue'

type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      description: 'Button variant, controls the style of the button',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link']
    },
    size: {
      control: 'select',
      description: 'Button sizes, controls the height of the button',
      options: ['default', 'mini', 'compact', 'large']
    },
    disabled: {
      control: 'boolean',
      description: 'Controls whether the button is disabled'
    }
  }
}

/**
 * Primary button
 */
export const Primary: Story = {
  render: () => ({
    components: { Button },
    template: '<Button>Button</Button>'
  })
}

/**
 * Secondary button
 */
export const Secondary: Story = {
  render: () => ({
    components: { Button },
    template: '<Button variant="secondary">Secondary</Button>'
  })
}

/**
 * Destructive button
 */
export const Destructive: Story = {
  render: () => ({
    components: { Button },
    template: '<Button variant="destructive">Destructive</Button>'
  })
}

/**
 * Outline button
 */
export const Outline: Story = {
  render: () => ({
    components: { Button },
    template: '<Button variant="outline">Outline</Button>'
  })
}

/**
 * Ghost button
 */
export const Ghost: Story = {
  render: () => ({
    components: { Button },
    template: '<Button variant="ghost">Ghost</Button>'
  })
}

/**
 * Link button
 */
export const Link: Story = {
  render: () => ({
    components: { Button },
    template: '<Button variant="link">Link</Button>'
  })
}

/**
 * Icon button
 */
export const Icon: Story = {
  render: () => ({
    components: { Button, ChevronRightIcon },
    template: `
      <Button variant="outline" size="icon">
        <ChevronRightIcon class="w-4 h-4" />
      </Button>
    `
  })
}

/**
 * Icon and text button
 */
export const WithIcon: Story = {
  render: () => ({
    components: { Button, MailOpen },
    template: `
      <Button>
        <MailOpen class="mr-2 w-4 h-4" /> Login with Email
      </Button>
    `
  })
}

export const Loading: Story = {
  render: () => ({
    components: { Button, RotateCw },
    template: `
      <Button disabled>
        <RotateCw class="mr-2 w-4 h-4 animate-spin" /> Please wait
      </Button>
    `
  })
}

export default meta
