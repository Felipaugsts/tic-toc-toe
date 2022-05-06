<template>
  <Navbar />
  <router-view />
</template>
<script>
import Navbar from "../src/components/Navbar.vue";
export default {
  components: {
    Navbar,
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
