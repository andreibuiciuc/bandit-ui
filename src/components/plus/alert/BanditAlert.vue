<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';

interface BanditAlertProps extends VariantProps<typeof alert> {
  customAlertClass?: string;
  customTitleClass?: string;
  customDescriptionClass?: string;
}

const alert = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

withDefaults(
  defineProps<{
    variant: BanditAlertProps['variant']
    customAlertClass: BanditAlertProps['customAlertClass']
    customTitleClass: BanditAlertProps['customAlertClass']
    customDescriptionClass: BanditAlertProps['customAlertClass']
  }>(),
  {
    variant: 'default',
  }
)
</script>

<template>
  <div :class="cn(alert({ variant }), customAlertClass)" role="alert">
    <slot name="icon"></slot>
    <h5 :class="cn('mb-1 font-medium leading-none tracking-tight', customTitleClass)">
      <!-- Slot for inserting title content -->
      <slot name="title"></slot>
    </h5>
    <div :class="cn('text-sm [&_p]:leading-relaxed', customDescriptionClass)">
      <!-- Slot for inserting description content -->
      <slot name="description"></slot>
    </div>

  </div>
</template>