<template>
  <div class="tw-flex tw-min-h-screen tw-flex-col">
    <NavbarTop />
    <div class="tw-mt-[100px] tw-flex-grow">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import NavbarTop from './components/NavbarTop.vue'

export default {
  components: {
    NavbarTop,
    AppFooter
  }
}
</script>

<style></style>
