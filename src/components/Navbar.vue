<template>
  <div class="navbar">
    <div class="navbar-inner">
      <img class="img-logo" src="../assets/images/SWORD_Health_logo.svg" />
      <p class="font-medium">
        Frontend developer<br />
        <span class="bold">Challenge</span>
      </p>
    </div>
  </div>
  >
</template>

<script>
export default {
  data() {
    return {
      color: "rgb(229, 229, 229)",
      opacity: 1,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      if (window.scrollY > 150) {
        this.opacity = 0.4;
      } else if (window.scrollY < 100) {
        this.opacity = 1;
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  background-color: v-bind("color");
  opacity: v-bind("opacity");
  width: 100vw;
  display: flex;
  justify-content: center;
}
.navbar-inner {
  height: 100px;
  width: 1050px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img-logo {
  width: 190px;
}
</style>
