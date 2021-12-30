<template>
    <select class="base-input">
        <option value="" disabled selected>Форма участі</option>
        <option v-for="option in options" :key="option" value="option">{{option}}</option>
    </select>
</template>

<script>
export default {
    name: 'BaseSelectInput',
    props: {
        name: {
            required: true,
            type: String
        },
        placeholder: String,
        options: {
            required: true,
            type: [String]
        }
    }
}
</script>
