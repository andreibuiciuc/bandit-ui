<script setup lang="tsx">
import { cva, type VariantProps } from 'class-variance-authority'
import { cn, type CustomConfig } from '@/utils/utils'

type AlertProps = VariantProps<typeof alert> & CustomConfig

const alert = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

withDefaults(
  defineProps<{
    variant?: AlertProps['variant']
    customClass?: AlertProps['customClass']
  }>(),
  {
    variant: 'default'
  }
)

const slots = defineSlots<{
  default(): any
  icon(): any
  title(): any
  description(): any
}>()
</script>

<template>
  <div :class="cn(alert({ variant }), customClass)" role="alert">
    <!-- Provide default slot for manually building the alert -->
    <slot></slot>
  </div>
</template>
