<script lang="ts" setup>
import { cn } from '@/utils/utils'

interface TableRowProps {
  customClass?: string
}
defineProps<TableRowProps>()
</script>

<template>
  <tr
    :class="
      cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', customClass)
    "
  >
    <slot></slot>
  </tr>
</template>
