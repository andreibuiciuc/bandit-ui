import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from '@/components/plus/badge/Badge.vue'

type Story = StoryObj<typeof Badge>

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      description: 'Badge variant, controls the style of the badge',
      options: ['default', 'secondary', 'destructive', 'outline']
    },
    customClass: {
      control: 'text',
      description: 'Custom Tailwind string of classes for customization'
    }
  }
}

/**
 * Primary badge
 */
export const Primary: Story = {
  render: () => ({
    components: { Badge },
    template: '<Badge variant="default">Bagde</Badge>'
  })
}

/**
 * Secondary badge
 */
export const Secondary: Story = {
  render: () => ({
    components: { Badge },
    template: '<Badge variant="secondary">Secondary</Badge>'
  })
}

/**
 * Destructive badge
 */
export const Destructive: Story = {
  render: () => ({
    components: { Badge },
    template: '<Badge variant="destructive">Destructive</Badge>'
  })
}

/**
 * Outline badge
 */
export const Outline: Story = {
  render: () => ({
    components: { Badge },
    template: '<Badge variant="outline">Outline</Badge>'
  })
}

export default meta
