<script setup lang="ts">
import Modal from '../modal/Modal.vue';
import ChooseContact from './ChooseContact.vue';

const open = defineModel('open', { required: true })

</script>

<template>
    <Modal v-model:open="open" container-class="p-5 md:p-0">
        <ChooseContact class="max-w-[1000px] w-full h-[750px]" @close="open = false" />
    </Modal>
</template>