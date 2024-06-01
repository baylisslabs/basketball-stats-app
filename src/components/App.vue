<template>
  <div class="container mt-4">
    <div v-for="c in counters" class="row d-flex align-items-center py-2 px-2">
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
        {{ total(counters) }}
      </div>
    </div>
    <div class="row d-flex align-items-center py-2 px-2">
      <div class="col d-flex justify-content-end">
        <button class="btn btn-secondary mx-2" data-bs-target="#confirmClearModal" data-bs-toggle="modal">Clear</button>
      </div>
    </div>

    <div class="modal fade" id="confirmClearModal" aria-hidden="true" aria-labelledby="confirmClearModalLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="confirmClearModalLabel">Confirm</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            This will reset all counters?
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" @click="clear" data-bs-target="#confirmClearModal" data-bs-toggle="modal">Confirm</button>
            <button class="btn btn-primary" data-bs-target="#confirmClearModal" data-bs-toggle="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
const storageKey = "counters";

export default {
  mounted() {
    const counters = localStorage.getItem(storageKey);
    if (counters) {
      this.counters = JSON.parse(counters);
    } else {
      this.clear();
    }
  },
  data() {
    return {
      counters: []
    };
  },
  methods: {
    increment(counter) {
      counter.value++;
      this.save();
    },
    decrement(counter) {
      if (counter.value) {
        counter.value--;
      }
      this.save();
    },
    total(counters) {
      var total = 0;
      for (const c of counters) {
        total += c.value;
      }
      return total;
    },
    save() {
      localStorage.setItem(storageKey, JSON.stringify(this.counters));
    },
    clear() {
      localStorage.removeItem(storageKey);
      this.counters = [
        //{ "label": "Screens", value: 0 },
        { "label": "Rebounds", value: 0 },
        { "label": "Outlet Pass", value: 0 },
        { "label": "Steal / Intercepts", value: 0 },
        { "label": "Block(no foul)", value: 0 },
        { "label": "Shot Attempt\n(In the paint)", value: 0 },
      ];
    }
  },
};
</script>