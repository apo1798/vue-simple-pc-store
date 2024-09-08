<template>
  <router-link class="card" :to="`/product/${item.id}`">
    <img :src="item.image" class="card-img-top" :alt="item.name" />
    <div class="card-body">
      <h5 class="card-title">
        {{ item.name }} - {{ item.harddrive }} / {{ item.memory }} / {{ item.gpu }}
      </h5>
      <p class="card-text">{{ item.description }}</p>
      <p><strong>品牌:</strong> {{ item.brand }}</p>
      <p><strong>價格:</strong> ${{ item.price }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
.card {
  width: 18rem;
  margin: 1rem;
}
</style>
