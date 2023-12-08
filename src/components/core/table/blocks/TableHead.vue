<script lang="ts" setup>
import { cn, type CustomConfig } from '@/utils/utils'

type TableHeadProps = Pick<CustomConfig, "customClass">
defineProps<TableHeadProps>()

</script>

<template>
  <th
    :class="
      cn(
        'h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        customClass
      )
    "
  >
    <slot></slot>
  </th>
</template>
