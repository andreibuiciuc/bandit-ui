<script lang="ts" setup>
import { cn, type CustomConfig } from '@/utils/utils'

type TableRowProps = Pick<CustomConfig, "customClass">
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
