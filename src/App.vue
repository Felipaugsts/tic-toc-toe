<template>
  <Navbar v-if="isAuth.auth" />
  <router-view />
  <Footer v-if="isAuth.auth" />
</template>
<script>
import Navbar from "../src/components/Navbar.vue";
import Footer from "../src/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    isAuth() {
      return this.$store.getters.isUserAuthenticated;
    },
  },
};
</script>
<style>
@import url("./assets/CSS/Global.css");
html,
body {
  margin: 0px !important;
  height: 1000px !important;
}
</style>
