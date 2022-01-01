<template>
    <input  class="base-input"
            type="text"
            :value="modelValue"
            autocomplete="none"
            @change="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: String
  }
}
</script>

<style>
  .base-input { 
    @apply bg-white rounded text-base px-4 py-3 border-2 border-gray-300 w-full 
    focus:outline-none focus:ring focus:border-blue-500 relative overflow-visible;
  }
  .base-input::before {
    content: attr(data-input-top-placeholder);
    @apply absolute left-2 top-0 translate-y-[-60%] bg-white px-2 text-gray-400;
  }
  .base-input:focus::before {
    @apply text-blue-500;
  }
</style>
