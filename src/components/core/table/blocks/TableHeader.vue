<script lang="ts" setup>
import { cn } from '@/utils/utils';

interface TableHeader { customClass?: string }
defineProps<TableHeader>();

</script>

<template>
  <thead :className="cn('[&_tr]:border-b', customClass)"> 
    <slot></slot>
  </thead> 
</template>