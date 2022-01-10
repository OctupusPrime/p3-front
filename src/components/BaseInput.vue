<template>
  <div class="base-input-container" :class="{ mark: required }">
    <input  class="base-input"
            :type="type"
            :name="name"
            :value="modelValue"
            :required="required"
            :placeholder="placeholder"
            autocomplete="off"
            @change="$emit('update:modelValue', $event.target.value)">
    <label :for="name" class="base-input-label">{{labelPlaceHolder}}</label>
  </div>

</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: String,
    type: String,
    name: {
      required: true,
      type: String
    },
    required: String,
    labelPlaceHolder: String,
    placeholder: String
  }
}
</script>

<style>
  .base-input-container {
    @apply relative w-full;
  }
  .base-input { 
    @apply bg-white rounded text-base px-4 py-3 border-2 border-gray-300 w-full 
    focus:outline-none focus:ring focus:border-blue-500;
  }
  .base-input-label {
    @apply absolute left-2 top-0 translate-y-[-60%] bg-white px-2 text-gray-400;
  }

  .base-input:focus ~ .base-input-label {
    @apply text-blue-500;
  }
  .mark::after {
    content: '*';
    @apply absolute right-[10px] top-[50%] translate-y-[-40%] text-xl font-bold text-red-700;
  }
</style>
