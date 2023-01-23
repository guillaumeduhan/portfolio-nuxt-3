# Vue

Components to download.

```vue
// Button.vue
<script setup>
const props = defineProps({
  loading: Boolean,
  disabled: Boolean,
  text: String,
});
</script>

<template>
  <button
    :class="`btn ${props.loading ? 'btn-loading' : ''  }`"
    :disabled="props.loading || props.disabled"
  >
    <slot v-if="props.loading" />
    <span v-else>{{ props.text }}</span>
  </button>
</template>

```