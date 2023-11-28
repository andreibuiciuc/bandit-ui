<script setup lang="ts">
import { cn } from '@/utils/utils'

defineProps<{ customClass?: string }>()
</script>

<template>
  <h5 :class="cn('mb-1 font-medium leading-none tracking-tight', customClass)">
    <slot></slot>
  </h5>
</template>
