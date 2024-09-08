<template>
  <div class="accordion accordion-menu" id="accordionExample">
    <div class="accordion-item" v-for="(item, index) in series" :key="index">
      <h2 class="accordion-header" :id="'heading' + index">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + index"
          aria-expanded="false"
          :aria-controls="'collapse' + index"
          @click="selectedAccordion = index"
          :class="{ 'active-accordion': selectedAccordion === index }"
        >
          {{ item.name }}
        </button>
      </h2>
      <div
        :id="'collapse' + index"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <ul>
            <li v-for="sub in item.subcategories" :key="sub.name">
              <a href="#" @click="$emit('filterBySubcategory', sub.name)">{{ sub.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: 'INTEL 系列',
          subcategories: [{ name: 'i5' }, { name: 'i7' }, { name: 'i9' }]
        },
        {
          name: 'AMD 系列',
          subcategories: [{ name: 'Ryzen 5' }, { name: 'Ryzen 7' }, { name: 'Ryzen 9' }]
        }
      ]
    }
  }
}
</script>

<style scoped>
.accordion-menu {
  width: 250px;
  background-color: #f8f9fa;
  padding: 1rem;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}
</style>
