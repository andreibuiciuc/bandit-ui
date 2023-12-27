import type { Meta, StoryObj } from '@storybook/vue3'
import Switch from '@/components/core/switch/Switch.vue'
import Label from '@/components/core/label/Label.vue'
import { html } from '@/utils/utils'

type Story = StoryObj<typeof Switch>

const meta: Meta<typeof Switch> = {
  component: Switch
}

export const Primary: Story = {
  render: () => ({
    components: { Switch, Label },
    template: html`
      <div class="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <label for="airplane-mpde">Airplane Mode</label>
      </div>
    `
  })
}

export default meta
