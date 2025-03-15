<script setup lang="ts">
import Modal from '../modal/Modal.vue';
import ChooseContact from './ChooseContact.vue';

const open = defineModel('open', { required: true })

</script>

<template>
    <Modal v-model:open="open">
        <ChooseContact />
    </Modal>
</template>