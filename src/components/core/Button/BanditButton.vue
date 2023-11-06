<script setup lang="ts">
import type { BanditSize, BanditVariant } from "@/types/index";

interface BanditButtonProps {
  label?: string
  variant?: BanditVariant
  size?: BanditSize
  disabled?: boolean
  rounded?: boolean
};

const BANDIT_BUTTON_BASE = "\
  inline-flex items-center justify-center \
  whitespace-nowrap text-sm font-medium ring-offset-background \
  transition-colors focus-visible:outline-none focus-visible:ring-2 \
  focus-visible:ring-ring focus-visible:ring-offset-2 \
  disabled:pointer-events-none disabled:opacity-50";

const BANDIT_BUTTON_VARIANTS: { [key in BanditVariant]: string } = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline: "bg-background border border-input hover:bg-accent hover:text-accent-foreground"
};

const BANDIT_BUTTON_SIZES: { [key in BanditSize]: string } = {
  mini: "bandit-mini h-6 px-2 text-xs",
  compact: "bandit-compact h-7 px-3",
  default: "bandit-default h-9 px-4 py-2",
  large: "bandit-large h-12 px-8 text-lg",
};

const _ = withDefaults(defineProps<BanditButtonProps>(), {
  label: "",
  variant: "default",
  size: "default",
  disabled: false,
  rounded: true
});

const emit = defineEmits(["click"]);

const onClick = (): void => {
  emit('click');
};

</script>

<template>
  <button 
    class="bandit-button"
    :disabled="disabled"
    :class="{ [BANDIT_BUTTON_BASE]: true, [BANDIT_BUTTON_VARIANTS[variant]]: true, [BANDIT_BUTTON_SIZES[size]]: true, 'rounded-md': !!rounded }"
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