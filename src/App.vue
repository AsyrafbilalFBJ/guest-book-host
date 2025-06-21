<script>
import Header from 'remote_app/Header';
export default {
  components: {
    Header
  }
}
</script>

<template>
  <Header v-if="$route.meta.needsAuth && $route.path !== '/authorization'" />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
