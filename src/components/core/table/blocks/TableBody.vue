<script lang="ts" setup>
import { cn } from '@/utils/utils';

interface TableBodyProps { customClass?: string }
defineProps<TableBodyProps>();

</script>

<template>
  <tbody :class="cn('[&_tr:last-child]:border-0', customClass)">
    <slot></slot>
  </tbody>
</template>