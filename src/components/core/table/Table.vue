<script lang="ts" setup>
import { cn } from '@/utils/utils';

interface TableProps { customClass?: string }
defineProps<TableProps>();

</script>

<template>
  <div class="relative w-full overflow-auto">
    <table :class="cn('w-full caption-bottom text-sm', customClass)">
      <slot></slot>
    </table>
  </div>
</template>