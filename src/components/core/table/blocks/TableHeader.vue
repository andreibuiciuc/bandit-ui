<script lang="ts" setup>
import { cn, type CustomConfig } from '@/utils/utils'

type TableHeaderProps = Pick<CustomConfig, "customClass">
defineProps<TableHeaderProps>()

</script>

<template>
  <thead :className="cn('[&_tr]:border-b', customClass)">
    <slot></slot>
  </thead>
</template>
