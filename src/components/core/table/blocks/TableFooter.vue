<script lang="ts" setup>
import { cn } from '@/utils/utils';

interface TableFooter { customClass?: string }
defineProps<TableFooter>();

</script>

<template>
  <tfoot :class="cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', customClass)">
    <slot></slot>
  </tfoot>
</template>