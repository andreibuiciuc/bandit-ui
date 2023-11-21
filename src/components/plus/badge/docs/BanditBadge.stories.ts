import type { Meta, StoryObj } from '@storybook/vue3'
import BanditBadge from '@/components/plus/badge/BanditBadge.vue';

type Story = StoryObj<typeof BanditBadge>

const meta: Meta<typeof BanditBadge> = {
  component: BanditBadge,
  argTypes: {
    label: {
      control: "text",
      description: "Badge label"
    },
    variant: {
      control: "select",
      description: "Badge variant, controls the style of the badge",
      options: ['default', 'secondary', 'destructive', 'outline']
    },
    customClass: {
      control: "text",
      description: "Custom Tailwind string of classes for customization"
    }
  }
}

/**
 * Badge for primary display
 */
export const Primary: Story = {
  args: {
    label: "Primary",
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
    label: "Secondary",
    variant: "secondary"
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
    label: "Destructive",
    variant: "destructive"
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
    label: "Outline",
    variant: "outline"
  },
  render: (args) => ({
    components: { BanditBadge },
    setup: () => {
      return { args }
    },
    template: '<BanditBadge v-bind="args" />'
  })
}

export default meta;