<script lang="ts" setup>
import { cn, type CustomConfig } from '@/utils/utils'

type TableCellProps = Pick<CustomConfig, "customClass">
defineProps<TableCellProps>()

</script>

<template>
  <td
    :class="
      cn(
        'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        customClass
      )
    "
  >
    <slot></slot>
  </td>
</template>
