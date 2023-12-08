<script setup lang="ts">
import { cn, type CustomConfig } from '@/utils/utils'

type AlertTitleProps = Pick<CustomConfig, "customClass">
defineProps<AlertTitleProps>()

</script>

<template>
  <h5 :class="cn('mb-1 font-medium leading-none tracking-tight', customClass)">
    <slot></slot>
  </h5>
</template>
