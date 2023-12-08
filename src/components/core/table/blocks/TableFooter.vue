<script lang="ts" setup>
import { cn, type CustomConfig } from '@/utils/utils'

type TableFooterProps = Pick<CustomConfig, "customClass">
defineProps<TableFooterProps>()

</script>

<template>
  <tfoot :class="cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', customClass)">
    <slot></slot>
  </tfoot>
</template>
