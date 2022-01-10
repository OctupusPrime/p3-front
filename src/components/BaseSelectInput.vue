<template>
    <div class="base-input-container" :class="{ mark: required }">
        <select class="base-input" 
                :name="name"
                :value="modelValue"
                @change="$emit('update:modelValue', $event.target.value)">  
            <option value="" disabled selected>{{placeholder}}</option>
            <option v-for="option in options" :key="option" :value="option">{{option}}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'BaseSelectInput',
    props: {
        modelValue: String,
        placeholder: {
            type: String,
            default: '---'
        },
        options: {
            required: true,
            type: Array
        },
        name: {
            required: true,
            type: String
        },
        required: String
    }
}
</script>

<style scoped>
    .base-input-container::after {
        @apply right-[25px];
    }
</style>