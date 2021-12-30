<template>
    <label class="base-file-input-label">
        <font-awesome-icon icon="file-word" class="mr-2.5"/>Загрузить файл
        <input  class="w-0"
                type="file"
                :name="name">
    </label>
</template>

<script>
export default {
  name: 'BaseInputFile',
  props: {
    name: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
  .base-file-input-label {
    @apply inline-block max-w-xs w-full border-dashed border-2 
  border-blue-500 rounded px-4 py-3 text-blue-500 cursor-pointer text-center
    focus-within:ring focus-within:border-blue-500 font-bold;
  }
</style>
