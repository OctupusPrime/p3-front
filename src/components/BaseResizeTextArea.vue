<template>
    <textarea   class="base-input overflow-hidden resize-none"
                rows="1"
                :name="name"
                :style="{'min-height': minHeight + 'px','max-height': maxHeight + 'px'}"
                :value="modelValue"
                :placeholder="placeholder"

                @input="resize($event.target)"
                @change="$emit('update:modelValue', $event.target.value)"/>    
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        name: {
            required: true,
            type: String
        },
        modelValue: String,
        minHeight: String,
        maxHeight: String,
        placeholder: String
    },
    setup() {
        const resize = elem => {
            elem.style.height = 'auto'
            elem.style.height = elem.scrollHeight + 'px'
        }
        return {
            resize
        }
    }
})
</script>