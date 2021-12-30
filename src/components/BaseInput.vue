<template>
  <input  class="base-input"
          type="text"
          :name="name"
          :placeholder="placeholder"
          :value="modelValue"
          @change="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    name: {
      require: true,
      type: String
    },
    modelValue: String,
    placeholder: String
  }
}
</script>
