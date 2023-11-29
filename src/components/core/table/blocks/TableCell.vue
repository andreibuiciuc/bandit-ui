<script lang="ts" setup>
import { cn } from '@/utils/utils';

interface TableCellProps { customClass?: string }
defineProps<TableCellProps>();

</script>

<template>
  <td :class="cn('p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', customClass)">
    <slot></slot>
  </td>
</template>