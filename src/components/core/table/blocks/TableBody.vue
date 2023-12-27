<script lang="ts" setup>
import { cn, type CustomConfig } from '@/utils/utils'

type TableBodyProps = Pick<CustomConfig, 'customClass'>
defineProps<TableBodyProps>()
</script>

<template>
  <tbody :class="cn('[&_tr:last-child]:border-0', customClass)">
    <slot></slot>
  </tbody>
</template>
