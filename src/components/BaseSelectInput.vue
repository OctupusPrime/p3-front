<template>
    <select class="base-input" 
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)">  
        <option value="" disabled selected>{{placeholder}}</option>
        <option v-for="option in options" :key="option" :value="option">{{option}}</option>
    </select>
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
        }
    }
}
</script>
