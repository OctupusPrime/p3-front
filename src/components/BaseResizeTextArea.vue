<template>
    <div class="base-input-container" :class="{ mark: required }">
        <textarea   class="base-input overflow-hidden resize-none"
                    rows="1"
                    :name="name"
                    :style="{'min-height': minHeight + 'px','max-height': maxHeight + 'px'}"
                    :placeholder="placeholder"
                    :value="modelValue"
                    
                    @input="resize($event.target)"
                    @change="$emit('update:modelValue', $event.target.value)"/>  
    </div>  
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        modelValue: String,
        minHeight: String,
        maxHeight: String,
        name: {
            required: true,
            type: String
        },
        placeholder: String,
        required: String
    },
    setup(props) {
        const resize = elem => {
            elem.style.height = 'auto'
            elem.style.height = elem.scrollHeight + 'px'
            
            if ( elem.style.height >= props.maxHeight)
                elem.style.overflowY = 'visible'
            else 
                elem.style.overflowY = 'hidden'
        }
        return {
            resize
        }
    }
})
</script>

<style scoped>
    .base-input-container::after {
        @apply top-[15px] translate-y-[0%];
    }
</style>