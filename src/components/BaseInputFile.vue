<template>
    <label class="base-file-input-label">
        <font-awesome-icon icon="file-word" class="mr-2.5"/>Загрузить файл
        <input  class="w-0"
                type="file"
                :name="name"
                @change="fileToBuffer($event.target)">
    </label>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInputFile',
  props: {
    name: {
      required: true,
      type: String
    },
    modelValue: File
  },
  setup(props, {emit}) {
    const fileToBuffer = (elem) => {
      // const reader = new FileReader()

    //   reader.onload = function() {

    //   const arrayBuffer = this.result
    //     // array = new Uint8Array(arrayBuffer),
    //     // binaryString = String.fromCharCode.apply(null, array);
      
    // console.log(arrayBuffer);
    //   }
    console.log(elem.files[0].path);
    emit('update:modelValue', elem.files[0])
      // reader.readAsArrayBuffer(elem.files[0]);
    }
    return {
      fileToBuffer
    }
  }
})
</script>

<style scoped>
  .base-file-input-label {
    @apply inline-block max-w-xs w-full border-dashed border-2 
  border-blue-500 rounded px-4 py-3 text-blue-500 cursor-pointer text-center
    focus-within:ring focus-within:border-blue-500 font-bold;
  }
</style>
