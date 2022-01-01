<template>
    <textarea   class="base-input overflow-hidden resize-none"
                rows="1"
                :style="{'min-height': minHeight + 'px','max-height': maxHeight + 'px'}"
                :value="modelValue"
                
                @input="resize($event.target)"
                @change="$emit('update:modelValue', $event.target.value)"/>    
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        modelValue: String,
        minHeight: String,
        maxHeight: String
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