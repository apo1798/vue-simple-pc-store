<template>
  <main class="tw-container">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <ul>
      <li>{{ product.brand }}</li>
      <li>{{ product.category }}</li>
      <li>{{ product.gpu }}</li>
      <li>{{ product.harddrive }}</li>
      <li>{{ product.memory }}</li>
    </ul>
    <router-link to="/">回首頁</router-link>
  </main>
</template>

<script>
import { products } from '@/data/products'

export default {
  computed: {
    product() {
      const productId = this.$route.params.productId
      const product = products.find((product) => {
        return String(product.id) === productId
      })
      console.log(product)
      return product
    }
  }
}
</script>
