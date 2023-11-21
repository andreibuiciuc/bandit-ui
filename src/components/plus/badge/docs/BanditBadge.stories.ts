import type { Meta, StoryObj } from '@storybook/vue3'
import { Hourglass } from 'lucide-vue-next'
import BanditBadge from '@/components/plus/badge/BanditBadge.vue'

type Story = StoryObj<typeof BanditBadge>

const meta: Meta<typeof BanditBadge> = {
  component: BanditBadge,
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge label'
    },
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
 * Badge for primary display
 */
export const Primary: Story = {
  args: {
    label: 'Primary'
  },
  render: (args) => ({
    components: { BanditBadge },
    setup: () => {
      return { args }
    },
    template: '<BanditBadge v-bind="args" />'
  })
}

/**
 * Badge for secondary display
 */
export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary'
  },
  render: (args) => ({
    components: { BanditBadge },
    setup: () => {
      return { args }
    },
    template: '<BanditBadge v-bind="args" />'
  })
}

/**
 * Badge for destructive display
 */
export const Destructive: Story = {
  args: {
    label: 'Destructive',
    variant: 'destructive'
  },
  render: (args) => ({
    components: { BanditBadge },
    setup: () => {
      return { args }
    },
    template: '<BanditBadge v-bind="args" />'
  })
}

/**
 * Badge for outline display
 */
export const Outline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline'
  },
  render: (args) => ({
    components: { BanditBadge },
    setup: () => {
      return { args }
    },
    template: '<BanditBadge v-bind="args" />'
  })
}

/**
 * Custom badge using icons also
 */
export const Custom: Story = {
  render: (args) => ({
    components: { BanditBadge, Hourglass },
    setup: () => {
      return { args }
    },
    template: `
    <BanditBadge variant="outline" customClass="py-2">
      <div class="flex items-center">
        <Hourglass size="12" />
        <span class="pl-1">Time tracker</span>
      </div>
    </BanditBadge>
    `
  })
}

export default meta
