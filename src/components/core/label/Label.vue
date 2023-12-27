<script lang="ts" setup>
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/utils'
import { Label as LabelPrimitive } from 'radix-vue'

interface LabelProps extends /* @vue-ignore */ VariantProps<typeof label> {
  customClass?: string
  for?: string
}

const label = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
)

const props = defineProps<LabelProps>()
</script>

<template>
  <LabelPrimitive :class="cn(label(), customClass)" v-bind="props">
    <slot></slot>
  </LabelPrimitive>
</template>
