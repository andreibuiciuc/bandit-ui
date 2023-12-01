<script lang="ts" setup>
import { cn } from '@/utils/utils'

interface TableCaptionProps {
  customClass?: string
}
defineProps<TableCaptionProps>()
</script>

<template>
  <caption :class="cn('mt-4 text-sm text-muted-foreground', customClass)">
    <slot></slot>
  </caption>
</template>
