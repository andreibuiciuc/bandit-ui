<script setup lang="ts">
import { cn } from '@/utils/utils';

interface BanditCardProps {
  customCardClass?: string
  customHeaderClass?: string
  customTitleClass?: string
  customDescriptionClass?: string
  customContentClass?: string
  customFooterClass?: string
}

defineProps<BanditCardProps>();

</script>

<template>
  <div :class="cn('rounded-lg border bg-card text-card-foreground shadow-sm', customCardClass)">
    <div :class="cn('flex flex-col space-y-1.5 p-6', customHeaderClass)">
      <h3 :class="cn('text-2xl font-semibold leading-none tracking-tight', customTitleClass)">
        <slot name="title"></slot>
      </h3>
      <p :class="cn('text-sm text-muted-foreground'), customDescriptionClass">
        <slot name="description"></slot>
      </p>
    </div>
    <div :class="cn('p-6 pt-0', customContentClass)">
      <slot name="content"></slot>
    </div>
    <div :class="cn('flex items-center p-6 pt-0', customFooterClass)">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
