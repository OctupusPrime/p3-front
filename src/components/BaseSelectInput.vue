<template>
    <select class="base-input">
        <option value="" disabled selected>{{placeholder}}</option>
        <option v-for="option in options" :key="option" value="option">{{option}}</option>
    </select>
</template>

<script>
export default {
    name: 'BaseSelectInput',
    props: {
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
