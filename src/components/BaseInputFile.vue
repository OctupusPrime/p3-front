<template>
    <label class="inline-block max-w-xs w-full border-dashed border-2 
            border-blue-500 rounded px-4 py-3 text-blue-500 cursor-pointer text-center">
        <font-awesome-icon icon="file-word"/>&emsp;Загрузить файл
        <input  class="hidden"
                type="file"
                :name="name">
    </label>
</template>

<script>
export default {
  name: 'BaseInputFile',
  props: {
    name: {
      require: true,
      type: String
    }
  }
}
</script>
