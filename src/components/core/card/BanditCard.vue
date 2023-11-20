<script setup lang="ts">
import { cn } from '@/utils/utils'
import { computed } from 'vue'

interface BanditCardProps {
  customCardClass?: string
  customHeaderClass?: string
  customTitleClass?: string
  customDescriptionClass?: string
  customContentClass?: string
  customFooterClass?: string
}

type CardSlot = 'title' | 'description' | 'content' | 'footer'

const props = defineProps<BanditCardProps>()

const slots = defineSlots<{
  title(): any
  description(): any
  content(): any
  footer(): any
}>()

const isContentProvided = (slot: CardSlot): boolean => {
  return !!slots[slot]
}

const isHeaderContentProvided = (): boolean => {
  return isContentProvided('title') || isContentProvided('description')
}

const headerClasses = computed(() => {
  return cn(
    'flex flex-col p-6',
    props.customHeaderClass,
    isHeaderContentProvided() ? 'space-y-1.5' : ''
  )
})

const contentClasses = computed(() => {
  return cn('p-6', props.customContentClass, isHeaderContentProvided() ? 'pt-0' : '')
})
</script>

<template>
  <div :class="cn('rounded-lg border bg-card text-card-foreground shadow-sm', customCardClass)">
    <div v-if="isHeaderContentProvided()" :class="headerClasses">
      <h3
        v-if="isContentProvided('title')"
        :class="cn('text-2xl font-semibold leading-none tracking-tight', customTitleClass)"
      >
        <slot name="title"></slot>
      </h3>
      <p
        v-if="isContentProvided('description')"
        :class="(cn('text-sm text-muted-foreground'), customDescriptionClass)"
      >
        <slot name="description"></slot>
      </p>
    </div>
    <div v-if="isContentProvided('content')" :class="contentClasses">
      <slot name="content"></slot>
    </div>
    <div
      v-if="isContentProvided('footer')"
      :class="cn('flex items-center p-6 pt-0', customFooterClass)"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
