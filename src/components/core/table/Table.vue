<script lang="ts" setup>
import { cn, type CustomConfig } from '@/utils/utils'

type TableProps = CustomConfig;
defineProps<TableProps>()

</script>

<template>
  <div class="relative w-full overflow-auto">
    <table :class="cn('w-full caption-bottom text-sm', customClass)">
      <slot></slot>
    </table>
  </div>
</template>
