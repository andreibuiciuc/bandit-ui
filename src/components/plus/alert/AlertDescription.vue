<script lang="ts" setup>
import { cn } from '@/utils/utils'

defineProps<{ customClass?: string }>()
</script>

<template>
  <div :class="cn('text-sm [&_p]:leading-relaxed', customClass)">
    <slot></slot>
  </div>
</template>
