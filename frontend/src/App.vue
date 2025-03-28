<template>
  <router-view />
  <PageFooter />
</template>

<script>
// import PageHeader from './components/layout/PageHeader.vue';
import PageFooter from './components/layout/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageFooter,
  }
}
</script>

<style>

</style>
