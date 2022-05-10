<template>
  <Navbar />
  <router-view />
  <Footer />
</template>
<script>
import Navbar from "../src/components/Navbar.vue";
import Footer from "../src/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
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
