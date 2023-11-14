<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

interface BanditButtonProps extends VariantProps<typeof button> { label?: string, disabled?: boolean, rounded?: boolean };

const button = cva("inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "bg-background border border-input hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      mini: "bandit-mini h-6 px-2 text-xs",
      compact: "bandit-compact h-7 px-3",
      default: "bandit-default h-9 px-4 py-2",
      large: "bandit-large h-12 px-8 text-lg",
    },
    rounded: {
      true: "rounded-md"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    rounded: true
  }
});

withDefaults(
  defineProps<{ 
    variant: BanditButtonProps["variant"], 
    size: BanditButtonProps["size"], 
    rounded: BanditButtonProps["rounded"],
    label: BanditButtonProps["label"],
    disabled: BanditButtonProps["disabled"]
  }>(), {
    label: "",
    variant: "default",
    size: "default",
    rounded: true
  }
);

const emit = defineEmits(["click"]);

const onClick = (): void => {
  emit('click');
};

</script>

<template>
  <button 
    class="bandit-button"
    :class="button({ variant, size, rounded })"
    :disabled="disabled"
    @click="onClick"
  >
  <template v-if="!!label">
    <slot name="prepend-icon">
      <!-- Slot for inserting the icon before the label -->
    </slot>
    <span>{{ label }}</span>
    <slot name="append-icon">
      <!-- Slot for inserting the icon after the label -->
    </slot>
  </template>
  <slot v-else></slot>
  </button>
</template>