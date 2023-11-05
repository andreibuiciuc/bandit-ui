<script setup lang="ts">

interface DecoratorItem { key: string, value: string };
interface DecoratorProps { rowKey: string, items: DecoratorItem[] };

const _ = defineProps<DecoratorProps>();

</script>

<template>
  <div class="flex items-center">
    <span class="pr-4 text-sm w-40">{{ rowKey }}</span>
      <div class="flex px-8 py-4 w-56" v-for="item in items" :key="item.key">
        <slot name="component" :propKey="item.key" :propValue="item.value"></slot>
      </div>
  </div>
</template>