<script setup>
import { reactive, onMounted, computed } from 'vue'
import { OnLongPress } from '@vueuse/components'
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

const updateValue = (index, increment) => {
  const newValue = state.counters[index].value + increment;
  if (newValue >= 0) {
    state.counters[index].value = newValue;
    save();
  }
};

const updateMade = (index, increment) => {
  const { made, attempted } = state.counters[index];
  const newMade = made + increment;
  const newAttempted = attempted + increment;
  if (newMade >= 0 && newAttempted >= 0) {
    state.counters[index].made = newMade;
    state.counters[index].attempted = newAttempted;
    save();
  }
};

const updateMissed = (index, increment) => {
  const { made, attempted } = state.counters[index];
  const newAttempted = attempted + increment;
  if (newAttempted >= 0 && newAttempted >= made) {
    state.counters[index].attempted = newAttempted;
    save();
  }
};


const save = () => {
  localStorage.setItem(storageKey, JSON.stringify(state.counters));
};

const clear = () => {
  localStorage.removeItem(storageKey);
  state.counters = [
      //{ "label": "Screens", value: 0 },
      { "label": "Rebound", value: 0, type: "value" },
      { "label": "Outlet Pass", value: 0, type: "value" },
      { "label": "Steal / Intercept", value: 0, type: "value" },
      { "label": "Block(no foul)", value: 0, type: "value" },
      { "label": "Shot Attempt\n(In the paint)", value: 0, type: "value" },
      { "label": "FG 3PT", made: 0, attempted: 0, type: "goal", points: 3 },
      { "label": "FG 2PT", made: 0, attempted: 0, type: "goal", points: 2 },
      { "label": "Free Throw", made: 0, attempted: 0, type: "goal", points: 1 },
    ];
};

const total = computed(() => (counters) => {
  var value = 0;
  var made = 0;
  var attempted = 0;
  for (const c of counters) {
    value += c.value ? c.value : 0;
    made += c.made ? c.made : 0;
    attempted += c.attempted ? c.attempted : 0;
  }
  return `${made} / ${attempted}, ${value} `;
});

const points = computed(() => (counters) => {
  var points = 0;
  for (const c of counters) {
    points += c.made ? c.made * c.points: 0;
  }
  return points;
});

</script>

<template>
  <div class="container mt-4">
    <div v-for="(item, index) in state.counters" class="row d-flex align-items-center py-2 px-2">
      <div class="col-5">
        {{ item.label }}
      </div>
      <template v-if="item.type=='value'">
        <div class="col-2">
          <OnLongPress
            as="button"
            :options="{ delay: 1000, onMouseUp: (_,__,lp) => !lp ? updateValue(index, 1) : null }"
            class="btn btn-primary"
            @trigger="updateValue(index, -1)">+1</OnLongPress>
        </div>
        <div class="col d-flex justify-content-end">
          {{ item.value }}
        </div>
      </template>
      <template v-if="item.type=='goal'">
        <div class="col-2">
          <OnLongPress
            as="button"
            :options="{ delay: 1000, onMouseUp: (_,__,lp) => !lp ? updateMade(index, 1) : null }"
            class="btn btn-primary"
            @trigger="updateMade(index, -1)">+1</OnLongPress>
        </div>
        <div class="col-2">
          <OnLongPress
            as="button"
            :options="{ delay: 1000, onMouseUp: (_,__,lp) => !lp ? updateMissed(index, 1) : null }"
            class="btn btn-danger"
            @trigger="updateMissed(index, -1)">Ø</OnLongPress>
        </div>
        <div class="col d-flex justify-content-end">
          {{ item.made }} / {{ item.attempted }}
        </div>
      </template>
    </div>
    <div class="row d-flex align-items-center py-2 px-2">
      <div class="col-5">
        Totals
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
      <div class="col-5">
        Points
      </div>
      <div class="col-2">
      </div>
      <div class="col-2">
      </div>
      <div class="col d-flex justify-content-end">
        {{ points(state.counters) }} pts
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
      @confirmed="clear"
    />
  </div>
</template>

