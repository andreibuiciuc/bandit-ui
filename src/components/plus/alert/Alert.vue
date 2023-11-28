<script setup lang="tsx">
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/utils'

interface BanditAlertProps extends VariantProps<typeof alert> {
  customClass?: string
}

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
    variant: BanditAlertProps['variant']
    customClass: BanditAlertProps['customClass']
  }>(),
  {
    variant: 'default'
  }
)
</script>

<template>
  <div :class="cn(alert({ variant }), customClass)" role="alert">
    <slot></slot>
  </div>
</template>
