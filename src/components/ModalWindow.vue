<template>
    <teleport to="body">
        <div class="fixed top-0 left-0 right-0 bottom-0" style="background: rgba(0,0,0,.6);">
            <div class="absolute max-w-4xl w-[95%] bg-white left-[50%] translate-x-[-50%] top-[20%] p-5 rounded">
                <slot></slot>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
  name: 'ModalWindow'
}
</script>