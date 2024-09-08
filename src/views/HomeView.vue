<script>
import AccordionMenu from '@/components/AccordionMenu.vue'
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'

export default {
  data: function () {
    return {
      selectedSubcategory: '',
      selectedBrand: '',
      selectedPriceSort: '',
      minPrice: null,
      maxPrice: null,
      selectedCategory: '',
      selectedSubCategory: '',
      subOptions: [],
      products: products,
      filteredProducts: [...products], // 篩選後的商品
      currentPage: 1, // 當前頁數
      itemsPerPage: 10 // 每頁顯示的商品數量
    }
  },
  components: {
    ProductCard,
    AccordionMenu
  },
  methods: {
    filterBySubcategory(subcategory) {
      console.log({ subcategory })
      this.selectedSubcategory = subcategory
      this.filterProducts()
    },
    filterProducts() {
      let products = this.products.filter((product) => {
        const matchesSubcategory = this.selectedSubcategory
          ? product.category === this.selectedSubcategory
          : true
        const matchesBrand = this.selectedBrand ? product.brand === this.selectedBrand : true
        const matchesMinPrice = this.minPrice !== null ? product.price >= this.minPrice : true
        const matchesMaxPrice = this.maxPrice !== null ? product.price <= this.maxPrice : true

        // 根據選中的子類別篩選
        const matchesSubCategory = this.selectedSubCategory
          ? product[this.selectedCategory] === this.selectedSubCategory
          : true

        return (
          matchesSubcategory &&
          matchesBrand &&
          matchesMinPrice &&
          matchesMaxPrice &&
          matchesSubCategory
        )
      })

      // 根據價格排序
      if (this.selectedPriceSort === 'asc') {
        products.sort((a, b) => a.price - b.price)
      } else if (this.selectedPriceSort === 'desc') {
        products.sort((a, b) => b.price - a.price)
      }

      this.filteredProducts = products
    },
    updateSubOptions() {
      if (this.selectedCategory === 'harddrive') {
        this.subOptions = ['1TB', '2TB']
      } else if (this.selectedCategory === 'memory') {
        this.subOptions = ['16G', '32G']
      } else if (this.selectedCategory === 'gpu') {
        this.subOptions = ['RTX4060', 'RTX4070', 'RTX4080']
      } else {
        this.subOptions = []
      }
      this.selectedSubCategory = '' // 重置已選擇的子類別
      this.filterProducts()
    },
    setCurrentPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
    }
  },
  computed: {
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredProducts.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage)
    }
  }
}
</script>

<template>
  <main class="tw-flex tw-gap-4 tw-mb-4 p-3">
    <AccordionMenu class="tw-flex-shrink-0" @filterBySubcategory="filterBySubcategory" />
    <div>
      <div class="row mb-3">
        <!-- 價格區間輸入框 -->
        <div class="col-md-2">
          <label for="minPrice" class="form-label"></label>
          <input
            id="minPrice"
            type="number"
            class="form-control"
            v-model.number="minPrice"
            placeholder="最低價格"
            @input="filterProducts"
          />
        </div>
        <div class="col-md-2">
          <label for="maxPrice" class="form-label"></label>
          <input
            id="maxPrice"
            type="number"
            class="form-control"
            v-model.number="maxPrice"
            placeholder="最高價格"
            @input="filterProducts"
          />
        </div>

        <!-- 價格排序下拉選單 -->
        <div class="col-md-2">
          <label for="priceSort" class="form-label"></label>
          <select
            id="priceSort"
            class="form-select"
            v-model="selectedPriceSort"
            @change="filterProducts"
          >
            <option value="">默認排序</option>
            <option value="asc">價格：低到高</option>
            <option value="desc">價格：高到低</option>
          </select>
        </div>

        <!-- 品牌篩選下拉選單 -->
        <div class="col-md-2">
          <label for="brandSelect" class="form-label"></label>
          <select
            id="brandSelect"
            class="form-select"
            v-model="selectedBrand"
            @change="filterProducts"
          >
            <option value="">所有品牌</option>
            <option value="ASUS">ASUS-華碩</option>
            <option value="MSI">MSI-微星</option>
            <option value="ACER">ACER-宏碁</option>
            <option value="GIGABYTE">GIGABYTE-技嘉</option>
          </select>
        </div>

        <!-- 新增的多層次下拉菜單 -->
        <div class="col-md-2">
          <label for="categorySelect" class="form-label"></label>
          <select
            id="categorySelect"
            class="form-select"
            v-model="selectedCategory"
            @change="updateSubOptions"
          >
            <option value="">選擇類別</option>
            <option value="harddrive">硬碟</option>
            <option value="memory">記憶體</option>
            <option value="gpu">顯示卡</option>
          </select>
        </div>

        <!-- 子類別動態顯示 -->
        <div class="col-md-2 tw-mr-0">
          <label for="subCategorySelect" class="form-label"></label>
          <select
            id="subCategorySelect"
            class="form-select"
            v-model="selectedSubCategory"
            @change="filterProducts"
          >
            <option value="">請先選擇類別</option>
            <option v-for="option in subOptions" :key="option" :value="option">{{ option }}</option>
          </select>
        </div>
      </div>
      <div class="card-container">
        <ProductCard v-for="product in paginatedProducts" :key="product.id" :item="product" />
      </div>
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="setCurrentPage(currentPage - 1)">
              上一頁
            </a>
          </li>
          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <a class="page-link" href="#" @click.prevent="setCurrentPage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="setCurrentPage(currentPage + 1)">
              下一頁
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<style scoped>
.card-container {
  min-height: 35vh; /* 根據需要調整這裡的高度，確保卡片區足夠大來推動分頁 */
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: auto;
  justify-content: center;
}
</style>
