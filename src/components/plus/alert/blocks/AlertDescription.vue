<script lang="ts" setup>
import { cn, type CustomConfig } from '@/utils/utils'

type AlertDescriptionProps = Pick<CustomConfig, "customClass">
defineProps<AlertDescriptionProps>()

</script>

<template>
  <div :class="cn('text-sm [&_p]:leading-relaxed', customClass)">
    <slot></slot>
  </div>
</template>
