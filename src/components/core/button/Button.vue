<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

interface ButtonProps extends VariantProps<typeof button> {
  label?: string
  disabled?: boolean
}

const button = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'bg-background border border-input hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

withDefaults(
  defineProps<{
    variant: ButtonProps['variant']
    size: ButtonProps['size']
    label: ButtonProps['label']
    disabled: ButtonProps['disabled']
  }>(),
  {
    variant: 'default',
    size: 'default',
    label: ''
  }
)

const emit = defineEmits(['click'])

const onClick = (): void => {
  emit('click')
}
</script>

<template>
  <button
    :aria-label="label"
    :aria-disabled="disabled"
    tabindex="0"
    role="button"
    class="bandit-button"
    :class="button({ variant, size })"
    :disabled="disabled"
    @click="onClick"
  >
    <template v-if="!!label">{{ label }}</template>
    <slot v-else></slot>
  </button>
</template>
