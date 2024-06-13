<script setup>
import { reactive, onMounted, computed } from 'vue'
import ConfirmClearDialog from './ConfirmClearDialog.vue';

const storageKey = "counters";

const state = reactive({
  counters: [],
  showConfirm: false
})

onMounted(() => {
    const counters = localStorage.getItem(storageKey);
    if (counters) {
      state.counters = JSON.parse(counters);
    } else {
      clear();
    }
  }
);

const increment = (counter) => {
  counter.value++;
  save();
};

const decrement = (counter) => {
  if (counter.value) {
    counter.value--;
  }
  save();
};

const save = () => {
  localStorage.setItem(storageKey, JSON.stringify(state.counters));
};

const clear = () => {
  localStorage.removeItem(storageKey);
  state.counters = [
      //{ "label": "Screens", value: 0 },
      { "label": "Rebounds", value: 0 },
      { "label": "Outlet Pass", value: 0 },
      { "label": "Steal / Intercepts", value: 0 },
      { "label": "Block(no foul)", value: 0 },
      { "label": "Shot Attempt\n(In the paint)", value: 0 },
    ];
};

const total = computed(() => (counters) => {
  var total = 0;
  for (const c of counters) {
    total += c.value;
  }
  return total
});
</script>

<template>
  <div class="container mt-4">
    <div v-for="c in state.counters" class="row d-flex align-items-center py-2 px-2">
      <div class="col-5">
        {{ c.label }}
      </div>
      <div class="col-2">
        <button class="btn btn-primary" @click="increment(c)">+1</button>
      </div>
      <div class="col-2">
        <button class="btn btn-secondary mx-2" @click="decrement(c)">-1</button>
      </div>
      <div class="col d-flex justify-content-end">
        {{ c.value }}
      </div>
    </div>
    <div class="row d-flex align-items-center py-2 px-2">
      <div class="col-5">
        Total
      </div>
      <div class="col-2">
      </div>
      <div class="col-2">
      </div>
      <div class="col d-flex justify-content-end">
        {{ total(state.counters) }}
      </div>
    </div>
    <div class="row d-flex align-items-center py-2 px-2">
      <div class="col d-flex justify-content-end">
        <button class="btn btn-secondary mx-2" @click="state.showConfirm = true">Clear</button>
      </div>
    </div>

    <ConfirmClearDialog
      :show="state.showConfirm"
      @shouldClose="state.showConfirm = false"
      @confirmed="clear"/>
  </div>
</template>

