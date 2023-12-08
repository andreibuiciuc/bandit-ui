<script lang="ts" setup>
import { cn, type CustomConfig } from '@/utils/utils'

type TableCaptionProps = Pick<CustomConfig, "customClass">
defineProps<TableCaptionProps>()

</script>

<template>
  <caption :class="cn('mt-4 text-sm text-muted-foreground', customClass)">
    <slot></slot>
  </caption>
</template>
