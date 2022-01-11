<template>
    <button class="btn"
            :class="['btn-' + styled]"
            type="button">
            <font-awesome-icon icon="spinner" pulse v-if="loader === 'pending'"/>
            <font-awesome-icon icon="check-circle" v-else-if="loader === 'resolve'"/>
            <font-awesome-icon icon="times" v-else-if="loader === 'reject'"/>
        <span v-else>
            <font-awesome-icon v-if="icon" :icon="icon" class="mr-2.5"/>{{title}}
        </span>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        title: {
            required: true,
            type: String
        },
        icon: String,
        styled: {
            default: 'primary',
            type: String
        },
        loader: String
    }
}
</script>

<style scoped>
    .btn {
        @apply max-w-xs w-full px-3 py-3 rounded border-solid border-2 font-bold
        focus:ring focus:border-blue-500 outline-none;
    }
    .btn-primary {
        @apply border-blue-400 bg-blue-500 text-white;
    }
    .btn-secondary {
        @apply border-blue-400 bg-white text-blue-500;
    }
</style>
