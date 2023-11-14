import type { Meta, StoryObj } from '@storybook/vue3'
import { MailCheck } from 'lucide-vue-next'
import BanditButton from '@/components/core/Button/BanditButton.vue'

type Story = StoryObj<typeof BanditButton>

const meta: Meta<typeof BanditButton> = {
  component: BanditButton,
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label'
    },
    variant: {
      control: 'select',
      description: 'Button variant, controls the style of the button',
      options: ['default', 'secondary', 'destructive', 'outline', 'link']
    },
    size: {
      control: 'select',
      description: 'Button sizes, controls the height of the button',
      options: ['default', 'mini', 'compact', 'large']
    },
    disabled: {
      control: 'boolean',
      description: 'Controls whether the button is disabled'
    },
    rounded: {
      control: 'boolean',
      description: 'Controls whether the button is rounded'
    }
  }
}

/**
 * Used for important, non-destructive user actions
 */
export const Primary: Story = {
  args: {
    label: 'Primary'
  },
  render: (args) => ({
    components: { BanditButton },
    setup: () => {
      return { args }
    },
    template: '<BanditButton v-bind="args" />'
  })
}

/**
 * Used in conjuction with the primary button to perform the complementary flow
 */
export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary'
  },
  render: (args) => ({
    components: { BanditButton },
    setup: () => {
      return { args }
    },
    template: '<BanditButton v-bind="args" />'
  })
}

/**
 * Used for actions with a destructive effect
 */
export const Destructive: Story = {
  args: {
    label: 'Destructive',
    variant: 'destructive'
  },
  render: (args) => ({
    setup: () => {
      return { args }
    },
    components: { BanditButton },
    template: '<BanditButton v-bind="args" />'
  })
}

/**
 * Used for secondary or tertiary actions and may denote a related flow
 */
export const Outline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline'
  },
  render: (args) => ({
    components: { BanditButton },
    setup: () => {
      return { args }
    },
    template: '<BanditButton v-bind="args" />'
  })
}

/**
 * Used for secondary or tertiary actions and may denote a less likely action
 */
export const Ghost: Story = {
  args: {
    label: 'Ghost',
    variant: 'ghost'
  },
  render: (args) => ({
    components: { BanditButton },
    setup: () => {
      return { args }
    },
    template: '<BanditButton v-bind="args" />'
  })
}

/**
 * Used for actions that require a redirect
 */
export const Link: Story = {
  args: {
    label: 'Link',
    variant: 'link'
  },
  render: (args) => ({
    components: { BanditButton },
    setup: () => {
      return { args }
    },
    template: '<BanditButton v-bind="args" />'
  })
}

/**
 * Buttons accept the usage of icons before or after the label, using the corresponding slots.
 */
export const WithIcon: Story = {
  args: {
    label: 'Check your Email',
    variant: 'default'
  },
  render: (args) => ({
    components: { BanditButton, MailCheck },
    setup: () => {
      return { args }
    },
    template:
      '<BanditButton v-bind="args"><template #append-icon><MailCheck /></template></BanditButton>'
  })
}

export default meta
