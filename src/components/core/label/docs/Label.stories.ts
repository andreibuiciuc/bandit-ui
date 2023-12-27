import type { Meta, StoryObj } from '@storybook/vue3'
import Label from '@/components/core/label/Label.vue'

type Story = StoryObj<typeof Label>

const meta: Meta<typeof Label> = {
  component: Label
}

export const Primary: Story = {
  render: () => ({
    components: { Label },
    template: `<Label>Accept terms and conditions</Label>`
  })
}

export default meta
