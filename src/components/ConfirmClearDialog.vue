<script setup>
import { computed } from 'vue';

const props = defineProps({
    show: Boolean
});

const emit = defineEmits(['confirmed', 'shouldClose'])

const display = computed(() => {
  return props.show ? "block" : "none";
});

const onCancel = () => {
  emit("shouldClose")
}

const onConfirm = () => {
  emit("confirmed")
  emit("shouldClose")
}
</script>

<template>
  <div class="modal fade show" id="confirmClearModal" v-bind:style="{ display: display }" aria-hidden="true" aria-labelledby="confirmClearModalLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="confirmClearModalLabel">Confirm</h1>
          <button type="button" class="btn-close" @click="onCancel" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          This will reset all counters?
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" @click="onConfirm">Confirm</button>
          <button class="btn btn-primary" @click="onCancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>